import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CoordinatesMap, Figure, FigureMovement } from 'src/app/classes/chess-figures/Figure';
import {
  PawnFigure,
  KingFigure,
  KnightFigure,
} from 'src/app/classes/chess-figures';
import { Square, SquareCoordinates, SquareOrItsCoordinates, SquareWithFigure, SquareWithKing } from '../../classes/Square';
import { ChessField } from '../../classes/ChessField';
import RoomInfo from 'src/app/classes/RoomInfo';
import { WebsocketDecorator } from 'src/app/injectables/websocket';
import UserInfo from 'src/app/classes/UserInfo';
import { PNGParser } from 'src/app/injectables/png-parser';
import MoveEvent from 'src/app/classes/MoveEvent';
import { FigureAdvantage } from 'src/app/injectables/figure-advantage';

@Component({
  selector: 'app-chess-field',
  templateUrl: './chess-field.component.html',
  styleUrls: ['./chess-field.component.sass']
})
export class ChessFieldComponent implements OnInit, OnChanges {

  @Input() notation = [];
  @Input() room!: RoomInfo;
  @Input() isStudy: boolean = false;

  @Output() playerMadeMove = new EventEmitter<string>();

  figuresAdvantage: Figure[] = [];
  chessField: ChessField = new ChessField();
  currentSquareTarget: Square | null = null;
  dragTimer: boolean = false;
  promotionInfo: null | { square: Square, figure: Figure, info: MoveEvent } = null;
  promotePopup: boolean = false;
  isCheckMate: boolean = false;
  isCheck: boolean = false;
  kingSaveMoves: CoordinatesMap = {};

  private _currentSquareInfo: Square | null = null;
  get currentSquareInfo(): Square | null {
    return this._currentSquareInfo;
  }
  set currentSquareInfo(value: Square | null) {
    this._currentSquareInfo?.figure?.emit('onUnselect', { square: this._currentSquareInfo });
    this._currentSquareInfo = value;
    value?.figure?.emit('onSelect', { square: value });

    this.showValidMoves(value);
  }

  get squares(): Square[] {
    return this.chessField.squares;
  }

  get fieldLetters(): string[] {
    return this.chessField.fieldLetters;
  }

  get clientPlayer(): UserInfo | undefined {
    if (!this.socket.userInfo) return;
    const { id } = this.socket.userInfo
    return this.room?.players.find(player => player.id === id);
  }

  get playerColor(): Figure['color'] {
    return this.clientPlayer?.color || 'white';
  }

  get gameNotation(): string[] {
    return this.room.gameNotation || [];
  }

  get currentTurn(): Figure['color'] {
    return this.gameNotation.length % 2 === 0 ? 'white' : 'black';
  }

  get yourAdvantage(): Figure[] {
    return this.playerColor === 'white'
      ? this.figureAdvantage.whiteFigures
      : this.figureAdvantage.blackFigures;
  }

  get opponentAdvantage(): Figure[] {
    return this.playerColor === 'white'
      ? this.figureAdvantage.blackFigures
      : this.figureAdvantage.whiteFigures;
  }

  constructor(
    private socket: WebsocketDecorator,
    private pngParser: PNGParser,
    private figureAdvantage: FigureAdvantage,
  ) { }

  roomDidRefresh(oldRoom: RoomInfo, newRoom: RoomInfo) {
    if (!oldRoom || !newRoom) return;
    if (oldRoom.gameNotation.length !== newRoom.gameNotation.length) {
      for (let i = oldRoom.gameNotation.length; i < newRoom.gameNotation.length; i++) {
        console.log('tick');
        const move = newRoom.gameNotation[i];
        const info = this.pngParser.transformMoveNotation({
          originalMove: move,
          color: i % 2 === 0 ? 'white' : 'black',
          handleKingSelection: (square: Square, figure: Figure) => {
            this.handleKingSelection(square, figure);
          },
          chessField: this.chessField,
        });
        this.automaticMove(info);
      }
      this.markPossibleMovesForAllFigures();
    }
  }

  useNotation() {
    if (typeof this.gameNotation === 'string') {
      this.room.gameNotation = this.pngParser.convertNotationStringToArray(this.gameNotation);
    }
    this.gameNotation.forEach((move, index) => {
      const info = this.pngParser.transformMoveNotation({
        originalMove: move,
        color: index % 2 === 0 ? 'white' : 'black',
        handleKingSelection: (square: Square, figure: Figure) => {
          this.handleKingSelection(square, figure);
        },
        chessField: this.chessField,
      });
      this.automaticMove(info);
    });
  }

  automaticMove(info: {
    startingSquare: Square,
    targetSquare: Square,
    promotionInfo: string,
  }) {
    const { startingSquare, targetSquare, promotionInfo } = info;
    const capturedFigure = targetSquare.figure;
    console.log('automaticMove');
    targetSquare.figure = startingSquare.figure;
    startingSquare.figure = null;
    let event!: MoveEvent;
    if (targetSquare.figure instanceof Figure) {
      event = new MoveEvent({
        startCoordinates: startingSquare.coordinates,
        endCoordinates: targetSquare.coordinates,
        startSquare: startingSquare,
        endSquare: targetSquare,
        figure: targetSquare.figure,
        automatic: true,
        promotionInfo: promotionInfo,
      });
      targetSquare.figure.emit('onMove', event);
      this.chessField.emit('onMove', event);
      targetSquare.figure.didNotMove = false;
    }
    this.figureAdvantage.calculate(this.chessField);
    this.markPossibleMovesForAllFigures();
    this.confirmKingsSafety();
  }

  generateField() {
    const figures = this.chessField.generate(this.playerColor);
    this.addEventsToFigures(figures);
    this.markPossibleMovesForAllFigures();
    this.chessField.on('onMove', info => {
      if (!(info instanceof MoveEvent)) return;
      const { automatic } = info;
      if (automatic) return;
      this.convertMove(info);
      this.markPossibleMovesForAllFigures();
      this.confirmKingsSafety();
    });
  }

  confirmKingsSafety() {
    const { whiteKingSquare, blackKingSquare } = this.chessField.findKingsSquares();
    if (!whiteKingSquare || !blackKingSquare) return;
    const { x: whiteKingX, y: whiteKingY } = whiteKingSquare.coordinates;
    const { x: blackKingX, y: blackKingY } = blackKingSquare.coordinates;
    const whiteKing = whiteKingSquare.figure;
    const blackKing = blackKingSquare.figure;
    whiteKing.attackerSquares = [];
    blackKing.attackerSquares = [];

    this.chessField.traverse(square => {
      if (!square.figure || square.figure instanceof KingFigure) return;
      if (
        square.figure.color !== whiteKing.color
        && square.figure.moveIsPossible(whiteKingX, whiteKingY)
      ) {
        whiteKing.attackerSquares.push(square as SquareWithFigure);
      }
      if (
        square.figure.color !== blackKing.color
        && square.figure.moveIsPossible(blackKingX, blackKingY)
      ) {
        blackKing.attackerSquares.push(square as SquareWithFigure);
      }
    });
    if (!whiteKing.attackerSquares.length && !blackKing.attackerSquares.length) {
      this.isCheck = false;
      return;
    }
    this.isCheck = true;
    const isCheckMate = this.checkForCheckmate(whiteKing.attackerSquares.length
      ? whiteKingSquare
      : blackKingSquare
    );
    // this.isCheckMate = true;
    console.log('Is checkmate: ', isCheckMate);
  }

  checkForCheckmate(kingSquare: SquareWithKing): boolean {
    // We need to check some conditions.
    // 1) If King can move it's not a checkmate.
    const { figure: kingFigure } = kingSquare
    const { color: kingColor } = kingFigure;
    const attackerColor = kingColor === 'white' ? 'black' : 'white';
    let kingCanMove = false;
    kingFigure.traversePossibleMoves((x, y) => {
      const attackers = this.getSquareAttackers({ x, y }, attackerColor, true);
      kingCanMove = attackers.length === 0;
      return kingCanMove;
    });
    console.log('king can move: ', kingCanMove);
    // if (kingCanMove) return false;

    // 2) If there are 2 or more attackers and King cannot move it's checkmate.
    const { attackerSquares } = kingFigure;
    console.log('number of attackers: ', attackerSquares.length);
    if (attackerSquares.length > 1 && !kingCanMove) return true;

    // 3) If there is only 1 attacker and he can be taken by another figure, that is not pinned to the king,
    // it's not a checkmate.
    // 4) If some figure block current check without introducing other checks, it's not a checkmate.
    const attackerSquare = attackerSquares[0];
    const squaresBetween = this.chessField.getAllSquaresBetween(kingSquare, attackerSquare);
    squaresBetween.push(attackerSquare);
    console.log('squares between: ', squaresBetween);

    let kingCanBeProtected = false;
    this.chessField.traverse(currentSquare => {
      const { figure: currentFigure } = currentSquare;
      if (
        !currentFigure || currentFigure instanceof KingFigure
        || currentFigure.color !== kingColor
      ) return;

      const traitorMoves = this.getTraitorMoves(currentSquare, currentFigure);
      const hasSavers = squaresBetween.some(square => {
        const { x, y } = square.coordinates;
        return currentFigure.moveIsPossible(x, y) && !(traitorMoves[x] && traitorMoves[x][y]);
      });
      if (hasSavers) kingCanBeProtected = true;
      if (hasSavers) {
        console.log(currentSquare);
      }
      return hasSavers;
    });

    this.kingSaveMoves = {};
    squaresBetween.forEach(currentSquare => {
      const { x, y } = currentSquare.coordinates;
      if (!this.kingSaveMoves[x]) this.kingSaveMoves[x] = {};
      this.kingSaveMoves[x][y] = 'save king';
    });

    console.log('king can be protected: ', kingCanBeProtected);
    return !kingCanBeProtected;
  }

  convertMove(info: MoveEvent, promoteInfo?: string) {
    const { startCoordinates, endCoordinates, startSquare, endSquare, isCapture } = info;
    if (!promoteInfo && endSquare.figure?.name === 'Pawn'
    && (endSquare.figure.color === 'white' ? this.chessField.height : 1) === endCoordinates.y) return;

    const move = this.pngParser.convertMoveToPGN({
      startCoordinates, endCoordinates, startSquare, endSquare,
      chessField: this.chessField,
      isCapture: typeof isCapture === 'boolean' ? isCapture : false,
      promote: promoteInfo,
    });
    console.log(move);
    this.gameNotation.push(move);
    this.playerMadeMove.emit(move);
  }

  addEventsToFigures(eventFigures: Figure[]) {
    eventFigures.forEach(figure => {
      if (figure.name === 'Pawn') {
        figure.on('onMove', (info) => {
          if (!(info instanceof MoveEvent)) return;
          this.handlePawnMove(info);
        });
      }

      if (figure.name === 'King') {
        const selectHandler = (info: any) => {
          if (typeof info !== 'object' || !info) return;
          const { square } = info;
          if (square instanceof Square) this.handleKingSelection(square, figure);
        };
        const unselectHandler = (info: any) => {
          if (figure instanceof KingFigure && !Array.isArray(figure.movement)) {
            figure.movement.right = 1;
            figure.movement.left = 1;
          }
        }
        figure.on('onSelect', selectHandler);
        figure.on('onUnselect', unselectHandler);

        figure.once('onMove', (info) => {
          if (!(info instanceof MoveEvent)) return;
          if (!Array.isArray(figure.movement)) {
            figure.movement.left = 1;
            figure.movement.right = 1;
            figure.off('onSelect', selectHandler);
            figure.off('onUnselect', unselectHandler);
          }
          this.handleFirstKingMove(info);
        });
      }
    });
  }

  setCurrentSquareInfo(square: Square | null) {
    if (
      (!this.isStudy && square?.figure?.color !== this.playerColor)
      || this.currentTurn !== this.playerColor
    ) return;
    if (!square?.figure) {
      this.clearPossibleMoves();
      return;
    }
    this.currentSquareInfo = square;
    setTimeout(() => this.dragTimer = true, 500);
  }

  dragPieceMove(square: Square | null) {
    if (this.dragTimer) this.tryMovingAPiece(square, this.currentSquareTarget);
  }

  changeTargetSquare(square: Square | null) {
    this.currentSquareTarget = square;
  }

  squaresAreTheSame(square1: Square, square2: Square,): boolean {
    return square1.coordinates.x === square2.coordinates.x
      && square1.coordinates.y === square2.coordinates.y;
  }

  showValidMoves(square: Square | null) {
    this.clearPossibleMoves();
    if (!square?.figure) return;
    const traitorMoves = this.getTraitorMoves(square, square.figure);
    const { figure } = square;
    this.chessField.traverse(currentSquare => {
      const { x, y } = currentSquare.coordinates;
      if (
        !figure.moveIsPossible(x, y)
        || (traitorMoves[x] && traitorMoves[x][y])
      ) return;

      if (figure.isCoward) {
        const capturerSquares = this.getSquareAttackers(
          currentSquare.coordinates,
          figure.color === 'white' ? 'black' : 'white',
          true,
        );
        if (capturerSquares.length === 0) currentSquare.isPossibleMove = true;
        return;
      }

      if (this.isCheck && !(this.kingSaveMoves[x] && this.kingSaveMoves[x][y])) return;
      
      currentSquare.isPossibleMove = true;
    });
  }

  getSquareAttackers(
    square: SquareOrItsCoordinates,
    color: Figure['color'],
    includeImpossible: boolean = false,
  ): SquareWithFigure[] {
    const [x, y] = this.chessField.parseCoordinates(square);
    return this.chessField.findSquares(currentSquare => {
      const { figure: currentFigure } = currentSquare;
      if (!currentFigure || currentFigure.color !== color) return false;
      const moveIsPossible = currentFigure.moveIsPossible(x, y);
      if (!includeImpossible || moveIsPossible) return moveIsPossible;
      
      const moveIsImpossible = currentFigure.moveIsImpossible(x, y);
      if (!moveIsImpossible) return false;

      // If in the future there will be more figures who ignore collision, change this condition.
      if (currentFigure instanceof KnightFigure) return true;

      const obstacles = this.chessField.getOccupiedSquaresBetween(square, currentSquare);
      return obstacles.length === 0;
    }) as SquareWithFigure[];
  }

  getTraitorMoves(square: Square, figure: Figure): CoordinatesMap {
    const result: CoordinatesMap = {};
    if (figure instanceof KingFigure) return result;
    const { x: figureX, y: figureY } = square.coordinates;
    const { whiteKingSquare, blackKingSquare } = this.chessField.findKingsSquares();
    const kingSquare = figure.color === 'white' ? whiteKingSquare : blackKingSquare;
    if (!kingSquare) return result;

    const { x: kingX, y: kingY } = kingSquare.coordinates;
    if (
      figureX !== kingX
      && figureY !== kingY
      && !this.chessField.squaresAreOnTheSameDiagonal(kingSquare, square)
    ) return result;

    const potentialThreatsSquares: SquareWithFigure[] = this.chessField.findSquares(currentSquare => {
      if (!currentSquare.figure || currentSquare.figure.color === figure.color) return false;
      return currentSquare.figure.moveIsImpossible(kingX, kingY);
    }) as SquareWithFigure[];

    potentialThreatsSquares.forEach(currentSquare => {
      const { x: currentX, y: currentY } = currentSquare.coordinates;
      if (
        !this.chessField.squaresAreOnTheSameDiagonal(currentSquare, square)
        && figureX !== currentX
        && figureY !== currentY
      ) return;
      const squaresBetween = this.chessField.getOccupiedSquaresBetween(kingSquare, currentSquare);
      if (squaresBetween.length > 1) return;
      const { figure: currentFigure } = currentSquare;
      if (!currentFigure.moveIsImpossible(kingX, kingY)) return;

      figure.traversePossibleMoves((x, y, direction) => {
        if (this.chessField.squareIsBetweenTwoSquares({ x: +x, y: +y }, kingSquare, currentSquare)) {
          return;
        }
        if (!result[x]) result[x] = {};
        result[x][y] = direction;
      });
    });

    return result;
  }

  moveCurrentFigure(targetSquare: Square | null) {
    if (
      !targetSquare || !this.currentSquareInfo
      || this.squaresAreTheSame(targetSquare, this.currentSquareInfo)
    ) return;
    const { figure } = this.currentSquareInfo;
    this.currentSquareInfo.figure = null;
    console.log('moveCurrentFigure');
    targetSquare.figure = figure;

    if (figure instanceof Figure) {
      const event = new MoveEvent({
        startCoordinates: this.currentSquareInfo.coordinates,
        endCoordinates: targetSquare.coordinates,
        startSquare: this.currentSquareInfo,
        endSquare: targetSquare,
        figure,
      });
      figure.emit('onMove', event);
      this.chessField.emit('onMove', event);
      figure.didNotMove = false;
    }

    this.currentSquareInfo = null;
    this.currentSquareTarget = null;
    this.clearPossibleMoves();
  }

  captureFigure(targetSquare: Square | null) {
    if (!this.currentSquareInfo?.figure || !targetSquare?.figure) return;
    const { figure } = this.currentSquareInfo;
    const capturedFigure = targetSquare.figure
    console.log('captureFigure');
    targetSquare.figure = figure;
    this.currentSquareInfo.figure = null;
    if (figure instanceof Figure) {
      const event = new MoveEvent({
        startCoordinates: this.currentSquareInfo.coordinates,
        endCoordinates: targetSquare.coordinates,
        startSquare: this.currentSquareInfo,
        endSquare: targetSquare,
        figure,
        capturedFigure,
        isCapture: true,
      });
      figure.emit('onMove', event);
      figure.emit('onCapture', event)
      this.chessField.emit('onMove', event);
      this.chessField.emit('onCapture', event);
      figure.didNotMove = false;
    }
    this.currentSquareTarget = null;
    this.figureAdvantage.calculate(this.chessField);
  }

  clearPossibleMoves() {
    this.squares.forEach(square => square.isPossibleMove = false);
  }

  markPossibleMovesForAllFigures() {
    for (let square of this.chessField.squares) {
      if (square.figure) {
        this.markPossibleMoves({
          square,
          figure: square.figure,
        });
      }
    }
  }

  markPossibleMoves(info: {
    square: Square,
    figure: Figure,
    currentMove?: number,
    captureMovement?: FigureMovement,
    ignoreDirection?: 'vertical' | 'horizontal' | 'diagonal-topLeft'
      | 'diagonal-topRight',
  }) {
    const { ignoreDirection, currentMove, figure, captureMovement, square } = info;
    if (!currentMove && !captureMovement) {
      this.clearPossibleMoves();
      figure.clearPossibleMoves();
    }
    const currentMovement = captureMovement
      || figure.getCurrentMovement(currentMove || 0);
    if (!currentMovement) return;

    const coordinatesMaps: { [key: string]: CoordinatesMap } = {};

    // Get coordinates of all squares that a figure could move to, if there were not
    // obstacles. Do not check a direction if it's not a first move, that a figure could
    // make in one turn (like knight) and figure has mustChangeDirection flag on.
    if (ignoreDirection !== 'horizontal') {
      coordinatesMaps.horizontal = this.markPossibleHorizontalMoves(info);
    }
    if (ignoreDirection !== 'vertical') {
      coordinatesMaps.vertical = this.markPossibleVerticalMoves(info);
    }
    if (ignoreDirection !== 'diagonal-topLeft') {
      coordinatesMaps.diagonalTopLeft = this.markPossibleDiagonalTopLeftMoves(info);
    }
    if (ignoreDirection !== 'diagonal-topRight') {
      coordinatesMaps.diagonalTopRight = this.markPossibleDiagonalTopRightMoves(info);
    }

    // Then find all valid squares using coordinatesMap. Split them in arrays:
    // left, right, top, bottom, topLeft, topRight, bottomLeft, bottomRight squares.
    // Also capture squares for captureMovement.
    const {
      horizontal, vertical, diagonalTopLeft, diagonalTopRight, captures
    } = coordinatesMaps;
    const leftSquares: Square[] = [];
    const rightSquares: Square[] = [];
    const bottomSquares: Square[] = [];
    const topSquares: Square[] = [];
    const topLeftSquares: Square[] = [];
    const bottomRightSquares: Square[] = [];
    const topRightSquares: Square[] = [];
    const bottomLeftSquares: Square[] = [];
    
    for (let currentSquare of this.squares) {
      const { x, y } = currentSquare.coordinates;
      
      if (horizontal && horizontal[x] && horizontal[x][y] === 'left') {
        leftSquares.push(currentSquare);
      }
      if (horizontal && horizontal[x] && horizontal[x][y] === 'right') {
        rightSquares.push(currentSquare);
      }
      if (vertical && vertical[x] && vertical[x][y] === 'bottom') {
        bottomSquares.push(currentSquare);
      }
      if (vertical && vertical[x] && vertical[x][y] === 'top') {
        topSquares.push(currentSquare);
      }
      if (diagonalTopLeft && diagonalTopLeft[x] && diagonalTopLeft[x][y] === 'topLeft') {
        topLeftSquares.push(currentSquare);
      }
      if (diagonalTopLeft && diagonalTopLeft[x] && diagonalTopLeft[x][y] === 'bottomRight') {
        bottomRightSquares.push(currentSquare);
      }
      if (diagonalTopRight && diagonalTopRight[x] && diagonalTopRight[x][y] === 'topRight') {
        topRightSquares.push(currentSquare);
      }
      if (diagonalTopRight && diagonalTopRight[x] && diagonalTopRight[x][y] === 'bottomLeft') {
        bottomLeftSquares.push(currentSquare);
      }
    }

    // Sort the arrays so they can be traversed from closest square to the farthest.
    const ASC = (axis: 'x' | 'y') => (
      (square1: Square, square2: Square,): number => {
        if (square1.coordinates[axis] === square2.coordinates[axis]) return 0;
        return square1.coordinates[axis] > square2.coordinates[axis] ? 1 : -1;
      });

    const DESC = (axis: 'x' | 'y') => (
      (square1: Square, square2: Square,): number => {
        if (square1.coordinates[axis] === square2.coordinates[axis]) return 0;
        return square1.coordinates[axis] > square2.coordinates[axis] ? -1 : 1;
      });

    leftSquares.sort(DESC('x'));
    rightSquares.sort(ASC('x'));
    bottomSquares.sort(DESC('y'));
    topSquares.sort(ASC('y'));
    topLeftSquares.sort(DESC('x'));
    bottomRightSquares.sort(ASC('x'));
    topRightSquares.sort(ASC('x'));
    bottomLeftSquares.sort(DESC('x'));

    // Finally mark squares, using rules, decribed in method.
    const markArguments = {
      figure,
      currentMove: currentMove || 0,
      captureMovement,
    };

    this.saveFigurePossibleMoves({
      ...markArguments,
      squareList: leftSquares,
      distance: currentMovement.left,
      direction: 'left',
      ignoreDirection: 'horizontal',
    });

    this.saveFigurePossibleMoves({
      ...markArguments,
      squareList: rightSquares,
      distance: currentMovement.right,
      direction: 'right',
      ignoreDirection: 'horizontal',
    });

    this.saveFigurePossibleMoves({
      ...markArguments,
      squareList: bottomSquares,
      distance: currentMovement.bottom,
      direction: 'bottom',
      ignoreDirection: 'vertical',
    });

    this.saveFigurePossibleMoves({
      ...markArguments,
      squareList: topSquares,
      distance: currentMovement.top,
      direction: 'top',
      ignoreDirection: 'vertical',
    });

    this.saveFigurePossibleMoves({
      ...markArguments,
      squareList: topLeftSquares,
      distance: currentMovement.topLeft,
      direction: 'topLeft',
      ignoreDirection: 'diagonal-topLeft',
      square,
    });

    this.saveFigurePossibleMoves({
      ...markArguments,
      squareList: bottomRightSquares,
      distance: currentMovement.bottomRight,
      direction: 'bottomRight',
      ignoreDirection: 'diagonal-topLeft',
      square,
    });

    this.saveFigurePossibleMoves({
      ...markArguments,
      squareList: topRightSquares,
      distance: currentMovement.topRight,
      direction: 'topRight',
      ignoreDirection: 'diagonal-topRight',
      square,
    });

    this.saveFigurePossibleMoves({
      ...markArguments,
      squareList: bottomLeftSquares,
      distance: currentMovement.bottomLeft,
      direction: 'bottomLeft',
      ignoreDirection: 'diagonal-topRight',
      square,
    });

    // In case of figures, that moves in one way and captures in another way (like pawns),
    // we call this function again, telling her, that it's a capture movement.
    if (!captureMovement && !currentMove && figure.captureMovement) {
      this.markPossibleMoves({
        ...info,
        captureMovement: figure.captureMovement,
      });
    }
  }

  markPossibleHorizontalMoves(info: {
    square: Square,
    figure: Figure,
    currentMove?: number,
    captureMovement?: FigureMovement,
  }): CoordinatesMap {
    const { square, figure, currentMove = 0 } = info;
    const coordinatesMap: CoordinatesMap = {};
    const { coordinates: { x: startX, y: startY } } = square;
    const currentMovement = info.captureMovement || (Array.isArray(figure.movement)
      ? figure.movement[currentMove]
      : figure.movement);

    if (!currentMovement) return {};
    const { left, right } = currentMovement;
    if (!left && !right) return {};

    // Save coordinates of all squares on the left...
    if (left) {
      let periodStart = left === Infinity ? 1 : startX - left;
      if (periodStart < 1) periodStart = 1;
      for (let i = periodStart; i < startX; i++) {
        if (!coordinatesMap[i]) coordinatesMap[i] = {};
        coordinatesMap[i][startY] = 'left';
      }
    }

    // ...then do the same for the squares on the right.
    if (right) {
      let periodEnd = right === Infinity ? this.chessField.width : startX + right;
      if (periodEnd > this.chessField.width) {
        periodEnd = this.chessField.width;
      }
      for (let i = startX + 1; i <= periodEnd; i++) {
        if (!coordinatesMap[i]) coordinatesMap[i] = {};
        coordinatesMap[i][startY] = 'right';
      }
    }

    return coordinatesMap;
  }

  markPossibleVerticalMoves(info: {
    square: Square,
    figure: Figure,
    currentMove?: number,
    captureMovement?: FigureMovement,
  }): CoordinatesMap {
    const { square, figure, currentMove = 0 } = info;
    const coordinatesMap: CoordinatesMap = {};
    const { coordinates: { x: startX, y: startY } } = square;
    const currentMovement = info.captureMovement || (Array.isArray(figure.movement)
      ? figure.movement[currentMove]
      : figure.movement);

    if (!currentMovement) return {};
    const { top, bottom } = currentMovement;
    if (!top && !bottom) return {};

    coordinatesMap[startX] = {};
    // Save coordinates of all squares on the bottom...
    if (bottom) {
      let endPosition = bottom === Infinity ? 1 : startY - bottom;
      if (endPosition < 1) endPosition = 1;
      for (let i = startY - 1; i >= endPosition; i--) {
        coordinatesMap[startX][i] = 'bottom';
      }
    }

    // ...then do the same for the squares on the top.
    if (top) {
      let endPosition = top === Infinity ? 8 : startY + top;
      if (endPosition > 8) endPosition = 8;
      for (let i = startY + 1; i <= endPosition; i++) {
        coordinatesMap[startX][i] = 'top';
      }
    }

    return coordinatesMap;
  }

  markPossibleDiagonalTopLeftMoves(info: {
    square: Square,
    figure: Figure,
    currentMove?: number,
    captureMovement?: FigureMovement,
  }): CoordinatesMap {
    const { square, figure, currentMove = 0 } = info;
    const coordinatesMap: CoordinatesMap = {};
    const { coordinates: { x: startX, y: startY } } = square;
    const currentMovement = info.captureMovement || (Array.isArray(figure.movement)
      ? figure.movement[currentMove]
      : figure.movement);

    if (!currentMovement) return {};
    const { topLeft, bottomRight } = currentMovement;
    if (!topLeft && !bottomRight) return {};

    // Save coordinates of all squares on the top left...
    if (topLeft) {
      let endX = topLeft === Infinity ? 1 : startX - topLeft;
      let endY = topLeft === Infinity ? this.chessField.width : startY + topLeft;
      if (endY > this.chessField.width) endY = this.chessField.width;
      if (endX < 1) endX = 1;

      let currentX = startX - 1;
      let currentY = startY + 1;
      while (currentX >= endX && currentY <= endY) {
        if (!coordinatesMap[currentX]) coordinatesMap[currentX] = {}
        coordinatesMap[currentX][currentY] = 'topLeft';
        currentX--;
        currentY++;
      }
    }

    // ...then do the same for the squares on the bottom right.
    if (bottomRight) {
      let endX = bottomRight === Infinity ? this.chessField.width : startX + bottomRight;
      let endY = bottomRight === Infinity ? 1 : startY - bottomRight;
      if (endY < 1) endY = 1;
      if (endX > this.chessField.width) endX = this.chessField.width;

      let currentX = startX + 1;
      let currentY = startY - 1;
      while (currentX <= endX && currentY >= endY) {
        if (!coordinatesMap[currentX]) coordinatesMap[currentX] = {}
        coordinatesMap[currentX][currentY] = 'bottomRight';
        currentX++;
        currentY--;
      }
    }

    return coordinatesMap;
  }

  markPossibleDiagonalTopRightMoves(info: {
    square: Square,
    figure: Figure,
    currentMove?: number,
    captureMovement?: FigureMovement,
  }): CoordinatesMap {
    const { square, figure, currentMove = 0 } = info;
    const coordinatesMap: CoordinatesMap = {};
    const { coordinates: { x: startX, y: startY } } = square;
    const currentMovement = info.captureMovement || (Array.isArray(figure.movement)
      ? figure.movement[currentMove]
      : figure.movement);

    if (!currentMovement) return {};
    const { topRight, bottomLeft } = currentMovement;
    if (!topRight && !bottomLeft) return {};

    // Save coordinates of all squares on the top right...
    if (topRight) {
      let endX = topRight === Infinity ? this.chessField.width : startX + topRight;
      let endY = topRight === Infinity ? this.chessField.height : startY + topRight;
      if (endY > this.chessField.height) endY = this.chessField.height;
      if (endX > this.chessField.width) endX = this.chessField.width;

      let currentX = startX + 1;
      let currentY = startY + 1;
      while (currentX <= endX && currentY <= endY) {
        if (!coordinatesMap[currentX]) coordinatesMap[currentX] = {}
        coordinatesMap[currentX][currentY] = 'topRight';
        currentX++;
        currentY++;
      }
    }

    // ...then do the same for the squares on the bottom left.
    if (bottomLeft) {
      let endX = bottomLeft === Infinity ? 1 : startX - bottomLeft;
      let endY = bottomLeft === Infinity ? 1 : startY - bottomLeft;
      if (endY < 1) endY = 1;
      if (endX < 1) endX = 1;

      let currentX = startX - 1;
      let currentY = startY - 1;
      while (currentX >= endX && currentY >= endY) {
        if (!coordinatesMap[currentX]) coordinatesMap[currentX] = {}
        coordinatesMap[currentX][currentY] = 'bottomLeft';
        currentX--;
        currentY--;
      }
    }

    return coordinatesMap;
  }

  saveFigurePossibleMoves(info: {
    squareList: Square[],
    figure: Figure,
    distance: number,
    direction: string,
    currentMove: number,
    ignoreDirection: Parameters<ChessFieldComponent["markPossibleMoves"]>[0]['ignoreDirection'],
    captureMovement?: FigureMovement,
    square?: Square,
  }) {
    // If distance is 0, then something really went wrong.
    if (info.distance === 0) return;
    // 1) If you may only move a figure to the max movement distance, you may only mark
    // the last square.
    // 2) If figure cannot ignore collision, stop movement immediately when current square
    // in the loop is occupied.
    // 3) Only mark an occupied square if figure in that square is not the same color.
    // 4) If figure can move multiple times per turn, mark next moves separately, using
    // the same set of rules.
    const {
      squareList, figure, distance, currentMove, ignoreDirection, direction,
    } = info;
    const {
      noStop, numberOfMoves, ignoreCollision, mustChangeDirection,
    } = figure;
    let couldNotPass = false;
    let lastSquare: Square | null = null;
    const currentMovement = info.captureMovement || figure.getCurrentMovement(currentMove);
    if (!currentMovement || (noStop && squareList.length !== distance)) return;

    const validSquares: Square[] = [];
    const invalidSquares: Square[] = [];

    if (squareList.length === distance || distance === Infinity) {
      for (let i = 0; i < squareList.length; i++) {
        const currentSquare = squareList[i];
        const figureCanStop = !noStop
          || (numberOfMoves - 1 === currentMove && i === squareList.length - 1);
        const canMoveIntoSquare = !currentSquare.figure || currentMovement.canCapture;
        const squareHasNoFigureOfSameColor = currentSquare.figure?.color !== figure.color;
        const squareHasFigureOfDifferentColor = currentSquare.figure
          && currentSquare.figure.color !== figure.color;
        const stoppedMarkingPossibleMoves = couldNotPass || lastSquare;
        
        if (
          !stoppedMarkingPossibleMoves &&
          (!info.captureMovement && figureCanStop && canMoveIntoSquare
          && squareHasNoFigureOfSameColor)
          || (info.captureMovement && squareHasFigureOfDifferentColor)
        ) {
          validSquares.push(currentSquare);
        } else if (
          !stoppedMarkingPossibleMoves &&
          info.captureMovement && figure instanceof PawnFigure
          && figure.canCapturePawnInFront && info.square
        ) {
          const side = figure.canCapturePawnInFront
          const { x, y } = info.square.coordinates;
          const { x: currentX, y: currentY } = currentSquare.coordinates;
          const isWhite = figure.color === 'white';
          const takeOnLeft = side === 'left' && currentX === x - 1;
          const takeOnRight = side === 'right' && currentX === x + 1;
          const takeOnTop = currentY === y + 1;
          const takeOnBottom = currentY === y - 1;
          if (
            (isWhite && (takeOnLeft || takeOnRight) && takeOnTop)
            || (!isWhite && (takeOnLeft || takeOnRight) && takeOnBottom)
          ) validSquares.push(currentSquare);
        } else if (figureCanStop) {
          invalidSquares.push(currentSquare);
        }

        if (!ignoreCollision && currentSquare.figure) {
          couldNotPass = noStop && i !== squareList.length - 1;
          lastSquare = currentSquare;
        }
      }
    }

    validSquares.forEach(validSquare => {
      const { x, y } = validSquare.coordinates;
      figure.setPossibleMove(x, y, direction);
    });

    invalidSquares.forEach(invalidSquare => {
      const { x, y } = invalidSquare.coordinates;
      figure.setImpossibleMove(x, y, direction);
    });

    if (!info.captureMovement && !couldNotPass && numberOfMoves - 1 !== currentMove) {
      const startingSquare = lastSquare || squareList.pop();
      if (startingSquare) this.markPossibleMoves({
        square: startingSquare,
        figure,
        currentMove: currentMove + 1,
        ignoreDirection: mustChangeDirection ? ignoreDirection : undefined,
      });
    }
  }
  handlePawnMove(info: MoveEvent) {
    const { figure, automatic, promotionInfo } = info;
    if (figure.didNotMove) return this.handleFirstPawnMove(info);
    const { x: startX } = info.startCoordinates;
    const { x: endX, y: endY } = info.endCoordinates;
    if (startX !== endX && figure instanceof PawnFigure && figure.canCapturePawnInFront) {
      this.resolveEnpassant(info);
    }
    if (
      (figure.color === 'black' && endY === 1)
      || (figure.color === 'white' && endY === this.chessField.height)
    ) {
      if (automatic && promotionInfo) {
        const promotedFigure = (figure.color === 'white'
          ? this.chessField.promoteVariantsWhite
          : this.chessField.promoteVariantsBlack
        ).find(variant => variant.nameLetter === promotionInfo);
        if (!promotedFigure) return;
        console.log('handlePawnMove');
        info.endSquare.figure = promotedFigure.clone(figure.color);
        promotedFigure.didNotMove = false;
        return;
      }
      this.openPromotePopup(figure, info);
    }
  }
  resolveEnpassant(info: MoveEvent) {
    const { figure } = info;
    if (!(figure instanceof PawnFigure)) return;
    const { x: startX, y: startY } = info.startCoordinates;
    const { x: endX } = info.endCoordinates;
    if (
      (startX < endX && figure.canCapturePawnInFront !== 'right')
      || (startX > endX && figure.canCapturePawnInFront !== 'left')
    ) return;

    const square = this.chessField.findSquare(currentSquare => {
      const { x, y } = currentSquare.coordinates;
      return x === endX && y === startY;
    });
    if (!square?.figure) return;
    console.log('resolveEnpassant');
    square.figure = null;
    this.figureAdvantage.calculate(this.chessField);
  }
  handleFirstPawnMove(info: MoveEvent) {
    const { x: startX, y: startY } = info.startCoordinates;
    const { x: endX, y: endY } = info.endCoordinates;
    const { figure } = info;

    // Set pawn movement to normal value. 0 / 2 = 0; 2 / 2 = 1;
    if (!Array.isArray(figure.movement) && figure.didNotMove) {
      figure.movement.top = figure.movement.top / 2;
      figure.movement.bottom = figure.movement.bottom / 2;
    }

    // Do nothing, if it's a capture - pawns captures diagonaly, so X will not be equal.
    // Enpassant is impossible if pawn has already moved this game.
    if (startX !== endX || !figure.didNotMove) return;

    if (
      !(figure.color === 'black' && startY - endY === 2)
      && !(figure.color === 'white' && endY - startY === 2)
    ) return;

    let leftSquare: Square | null = null;
    let rightSquare: Square | null = null;


    const squares = this.chessField.findSquares(currentSquare => {
      const { x, y } = currentSquare.coordinates;
      return y === endY && (x === startX + 1 || x === startX - 1);
    });
    for (let currentSquare of squares) {
      const { x } = currentSquare.coordinates;
      if (x === startX + 1) rightSquare = currentSquare;
      if (x === startX - 1) leftSquare = currentSquare;
    }

    if (
      leftSquare?.figure instanceof PawnFigure
      && leftSquare?.figure?.color !== figure.color
    ) {
      leftSquare.figure.canCapturePawnInFront = 'right';
    }
    if (
      rightSquare?.figure instanceof PawnFigure
      && rightSquare?.figure?.color !== figure.color
    ) {
      rightSquare.figure.canCapturePawnInFront = 'left';
    }

    // Enpassant is only possible right after conditions for it are met. If opponent did
    // not capitalize, he loses this opportunity.
    // Prevent handler from firing once, because it will be fired immediately after 
    // figure onMove handlers and we need to wait for next one.
    let sameTick = true;
    const handler = () => {
      if (sameTick) {
        sameTick = false;
        return;
      }
      if (leftSquare?.figure instanceof PawnFigure) {
        leftSquare.figure.canCapturePawnInFront = false;
      }
      if (rightSquare?.figure instanceof PawnFigure) {
        rightSquare.figure.canCapturePawnInFront = false;
      }
      this.chessField.off('onMove', handler);
    }

    this.chessField.on('onMove', handler);
  }

  handleFirstKingMove(info: MoveEvent) {
    const { figure, startCoordinates, endCoordinates } = info;
    if (!figure.didNotMove) return;
    const { x: startX, y: startY } = startCoordinates;
    const { x: endX, y: endY } = endCoordinates;

    // if King mover vertically or just 1 square, it's not castle move.
    if (endY !== startY || Math.abs(endX - startX) === 1) return;

    const condition = endX > startX
      ? (x: number) => startX < x
      : (x: number) => startX > x;

    const rookSquare = this.chessField.findSquare((currentSquare: Square) => {
      const { x, y } = currentSquare.coordinates;
      return y === startY && condition(x)
        && currentSquare?.figure?.name === 'Rook'
        && currentSquare.figure.color === figure.color;
    });
    if (!rookSquare?.figure?.didNotMove) return;

    const rookTargetSquare = this.chessField.findSquare((currentSquare: Square) => {
      const { x, y } = currentSquare.coordinates;
      return y === startY
        && x === endX + (rookSquare.coordinates.x > startX ? -1 : 1);
    });
    if (!rookTargetSquare) return;

    const rook = rookSquare.figure;
    console.log('handleFirstKindMove');
    rookSquare.figure = null;
    rookTargetSquare.figure = rook;
    rook.didNotMove = false;
    figure.emit('onCastle', { isLong: rookSquare.coordinates.x < startX, figure });
  }

  handleKingSelection(square: Square, figure: Figure) {
    // If king did move already, it can only move normally.
    if (!figure.didNotMove) return;
    const { y: figureY, x: figureX } = square.coordinates;
    let leftRookSquare: Square | null = null;
    let rightRookSquare: Square | null = null;
    let hasFiguresLeft: boolean = false;
    let hasFiguresRight: boolean = false;

    // Search squares array for squares on the same row as the king, except the same
    // square. Save squares in the corner as this is where the Rooks should be placed.
    // If any square in between has a figure, set the flag for that direction to true.
    for (let currentSquare of this.chessField.squares) {
      const { x, y } = currentSquare.coordinates;
      if (y !== figureY || x === figureX) continue;

      if (x === 1) {
        leftRookSquare = currentSquare;
        continue;
      }
      if (x === this.chessField.width) {
        rightRookSquare = currentSquare;
        continue;
      }
      if (x < figureX && currentSquare.figure) hasFiguresLeft = true; 
      if (x > figureX && currentSquare.figure) hasFiguresRight = true;
    }

    // Castle is only available if there is not figures between King and a rook in that
    // direction, and both the Rook and King did not move.
    if (
      !hasFiguresRight && rightRookSquare?.figure?.name === 'Rook'
      && rightRookSquare.figure.color === figure.color 
      && rightRookSquare.figure.didNotMove
    ) {
      Array.isArray(figure.movement)
        ? figure.movement[0].right = 2
        : figure.movement.right = 2;
    }

    if (
      !hasFiguresLeft && leftRookSquare?.figure?.name === 'Rook'
      && leftRookSquare.figure.color === figure.color 
      && leftRookSquare.figure.didNotMove
    ) {
      Array.isArray(figure.movement)
        ? figure.movement[0].left = 2
        : figure.movement.left = 2;
    }

    this.markPossibleMoves({ square, figure });
  }

  openPromotePopup(figure: Figure, info: MoveEvent) {
    if (!figure.canPromote) return;
    this.promotionInfo = {
      figure,
      square: info.endSquare,
      info,
    };
    this.promotePopup = true;
  }

  promoteFigure(chosenFigure: Figure) {
    if (!this.promotionInfo) return;
    const figure = chosenFigure.clone(this.playerColor);
    console.log('promoteFigure');
    this.promotionInfo.square.figure = figure;
    figure.didNotMove = false;
    this.convertMove(this.promotionInfo.info, figure.nameLetter);
    this.markPossibleMoves({ square: this.promotionInfo.square, figure: figure });
    this.figureAdvantage.calculate(this.chessField)
  }

  tryMovingAPiece(square: Square | null, targetSquare: Square | null) {
    if (!targetSquare || !square?.figure) return;
    const { x: startX, y: startY } = square.coordinates;
    const { x: endX, y: endY } = targetSquare.coordinates;
    const xDifference = startX - endX;
    const yDifference = startY - endY;
    if (xDifference !== 0 && yDifference !== 0) {

    }
  }

  ngOnInit(): void {
    this.generateField();
    // const normalGame = `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6
    // 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7
    // 11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5
    // Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6
    // 23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 28. Qxg5
    // hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5
    // 35. Ra7 g6 36. Ra6+ Kc5 37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6
    // Nf2 42. g4 Bd3 43. Re6`;
    // const enPassantGame = `1. e4 e6
    // 2. e5 d5
    // 3. exd6 e.p.`;
    // const promotionGame = `1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 a6 5. e3 b5 6. c5 g6 7. Bd3 Bg4 8. h3 Bxf3 9. Qxf3 Bg7 10. g4 e5! 11. Qg3 Nfd7 12. Ne2 Qe7 13. 0-0 h5 14. f3 Nf8 15. a4 b4 16. Bd2 a5 17. e4 dxe4 18. Bxe4 Ne6 19. Rae1 h4 20. Qf2 0-0 21. f4 exd4 22. f5!? Nxc5 23. Bb1 d3 24. Nc1 Qd6 25. Ba2?? Bd4 26. Be3 Ne4 27. Qxh4 g5 28. Qh5 d2 29. f6 Qxf6 30. Bxd4 Qxd4+ 31. Kg2  dxe1=N+`;
    // this.room.gameNotation = this.pngParser.convertNotationStringToArray(promotionGame);
    if (Array.isArray(this.gameNotation) && this.gameNotation.length !== 0) {
      this.useNotation();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.room) {
      this.roomDidRefresh(changes.room.previousValue, changes.room.currentValue);
    }
  }

}
