import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoordinatesMap, Figure, FigureMovement } from 'src/app/classes/chess-figures/Figure';
import {
  PawnFigure,
  KingFigure,
} from 'src/app/classes/chess-figures';
import { Square, SquareCoordinates } from '../../classes/Square';
import { ChessField } from '../../classes/ChessField';
import RoomInfo from 'src/app/classes/RoomInfo';
import { WebsocketDecorator } from 'src/app/injectables/websocket';
import UserInfo from 'src/app/classes/UserInfo';

@Component({
  selector: 'app-chess-field',
  templateUrl: './chess-field.component.html',
  styleUrls: ['./chess-field.component.sass']
})
export class ChessFieldComponent implements OnInit {

  @Input() notation = [];
  @Input() room!: RoomInfo;

  @Output() figureCaptured = new EventEmitter<Figure>();

  chessField: ChessField = new ChessField();
  currentSquareTarget: Square | null = null;
  dragTimer: boolean = false;
  promotionInfo: null | { square: Square, figure: Figure } = null;
  promotePopup: boolean =  false;

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

  constructor(private socket: WebsocketDecorator) { }

  useNotation() {
    // transform notation into squares.
    this.gameNotation.forEach(move => {

    });
  }

  transformMoveNotation(originalMove: string, color: Figure['color']): {
    targetSquare: Square,
    startingSquare: Square,
  } {
    if (originalMove.length === 0) {
      throw new Error('Could not parse game notation - one of the moves is empty!');
    }
    // e1     - move pawn to e1
    // Be1    - move Bishop to e1
    // Rdf3   - move Rook at d file to f3
    // R1a3   - move Rook at 1'st row to a3
    // Qh4e1  - move Queen at h4 to e1
    // exd5   - take with pawn to d5
    // Bxe5   - take with Bishop to e5
    // Rdxf3  - take with Rook at d file to f3
    // R1xa3  - take with Rook on 1-st row to a3
    // Qh4xe1 - take with Queen on h4 to e1
    // O-O    - castle king side
    // O-O-O  - castle queen side
    // e8=Q   - pawn move to e8 and promotes to Queen
    // e7+    - move pawn to e7 which checks the King
    // Common parts:
    // 1) Last two symbols are target square always, except for castle move and promotion;
    // 2) First symbol is always the name of a figure, except for castle move, promotion and pawn move;
    // 3) If move is a capture, it has "x" simbol in it, after which come target square.
    if (originalMove === 'O-O' || originalMove === 'O-O-O') {
      const startingSquare = this.chessField
        .findSquare(square => square.figure?.name === 'King' && square.figure.color === color);
      if (!startingSquare) throw new Error('Could not make castle move - King was not found!');
      if (!startingSquare.figure?.didNotMove) throw new Error('Could not make castle move - King already did move!');
      if (originalMove === 'O-O') {
        startingSquare.figure.possibleMoves[];
      }
      return {};
    }
    const captureSymbol = 'x';
    const promotionSymbol = '=';
    const checkSymbol = '+';
    const isCapture = originalMove.match(captureSymbol);
    const isPromotion = originalMove.match(promotionSymbol);
    const isCheck = originalMove[originalMove.length - 1] === checkSymbol;
    let promotionInfo = '';
    let move = originalMove;
    if (isCapture) move = move.split(captureSymbol).join('');
    if (isCheck) move = move.slice(0, -1);
    if (isPromotion) {
      const parts = move.split(promotionSymbol);
      promotionInfo = parts[parts.length - 1];
      move = move.replace(`=${ promotionInfo }`, '');
    }

    const figureName = move[0].toUpperCase() === move[0] ? move[0] : '';
    const targetSquare = isPromotion ? move.slice(-4, -2) : move.slice(-2);
    const initialInfo = isCapture ? move.split(captureSymbol)[0].slice(1) : move.slice(1, -2);
    const startingSquare = {
      x: '',
      y: 0,
    };
    if (initialInfo.length === 1) {
      const isNumber = !isNaN(Number(initialInfo))
      startingSquare.x = isNumber ? '' : initialInfo;
      startingSquare.y = isNumber ? Number(initialInfo) : 0;
    }

    return {
      startingSquare: {},
      targetSquare: {}
    };
  }

  automaticMove() {}

  generateField() {
    const figures = this.chessField.generate(this.playerColor);
    this.addEventsToFigures(figures);
    this.markPossibleMovesForAllFigures();
    this.chessField.on('onMove', () => this.markPossibleMovesForAllFigures());
  }

  addEventsToFigures(eventFigures: Figure[]) {
    eventFigures.forEach(figure => {
      if (figure.name === 'Pawn') {
        figure.on('onMove', (info) => {
          if (typeof info !== 'object' || !info) return;
          const { startCoordinates, endCoordinates, endSquare } = info;
          if (
            startCoordinates instanceof SquareCoordinates
            && endCoordinates instanceof SquareCoordinates
            && endSquare instanceof Square
          ) {
            this.handlePawnMove({
              startCoordinates,
              endCoordinates,
              endSquare,
              figure,
            });
          }
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
          if (!Array.isArray(figure.movement)) {
            figure.movement.left = 1;
            figure.movement.right = 1;
            figure.off('onSelect', selectHandler);
            figure.off('onUnselect', unselectHandler);
          }

          if (typeof info !== 'object' || !info) return;
          const { startCoordinates, endCoordinates, startSquare } = info;
          if (
            startCoordinates instanceof SquareCoordinates
            && endCoordinates instanceof SquareCoordinates
            && startSquare instanceof Square
          ) {
            this.handleFirstKingMove({
              startCoordinates,
              endCoordinates,
              figure,
              startSquare,
            });
          }
        });
      }
    });
  }

  setCurrentSquareInfo(square: Square | null) {
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

    const { figure } = square;
    this.chessField.squares.forEach(currentSquare => {
      const { x, y } = currentSquare.coordinates;
      if (!figure.getPossibleMove(x, y)) return;
      if (!figure.isCoward) {
        currentSquare.isPossibleMove = true;
        return;
      }
      const capturerSquare = this.chessField.findSquare(checkedSquare => {
        const { figure: currentFigure } = checkedSquare;
        if (!currentFigure || currentFigure.color === figure.color) return false;
        const { possibleMoves } = currentFigure;
        return possibleMoves[x] ? possibleMoves[x][y] !== undefined : false;
      });
      if (!capturerSquare) currentSquare.isPossibleMove = true;
    });
  }

  moveCurrentFigure(targetSquare: Square | null) {
    if (
      !targetSquare || !this.currentSquareInfo
      || this.squaresAreTheSame(targetSquare, this.currentSquareInfo)
    ) return;
    const { figure } = this.currentSquareInfo;
    this.currentSquareInfo.figure = null;
    targetSquare.figure = figure;

    if (figure instanceof Figure) {
      figure.emit('onMove', {
        startCoordinates: this.currentSquareInfo.coordinates,
        endCoordinates: targetSquare.coordinates,
        startSquare: this.currentSquareInfo,
        endSquare: targetSquare,
      });
      this.chessField.emit('onMove', {
        startCoordinates: this.currentSquareInfo.coordinates,
        endCoordinates: targetSquare.coordinates,
        startSquare: this.currentSquareInfo,
        endSquare: targetSquare,
        figure: figure,
      });
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
    this.figureCaptured.emit(capturedFigure);
    targetSquare.figure = figure;
    if (figure instanceof Figure) {
      const figureInfo = {
        startCoordinates: this.currentSquareInfo.coordinates,
        endCoordinates: targetSquare.coordinates,
        startSquare: this.currentSquareInfo,
        endSquare: targetSquare,
      };
      figure.emit('onMove', figureInfo);
      figure.emit('onCapture', { ...figureInfo, capturedFigure })
      this.chessField.emit('onMove', { ...figureInfo, figure: figure });
      this.chessField.emit('onCapture', { ...figureInfo, figure: figure, capturedFigure });
      figure.didNotMove = false;
    }
    this.currentSquareInfo.figure = null;
    this.currentSquareTarget = null;
  }

  clearPossibleMoves() {
    this.squares.forEach(square => square.isPossibleMove = false);
  }

  markPossibleMovesForAllFigures() {
    for (let square of this.chessField.squares) {
      if (square.figure) {
        this.markPossibleMoves({ square, figure: square.figure });
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
      this.markPossibleMoves({ ...info, captureMovement: figure.captureMovement });
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

    if (squareList.length === distance || distance === Infinity) {
      for (let i = 0; i < squareList.length; i++) {
        const currentSquare = squareList[i];
        const figureCanStop = !noStop
          || (numberOfMoves - 1 === currentMove && i === squareList.length - 1);
        const canMoveIntoSquare = !currentSquare.figure || currentMovement.canCapture;
        const squareHasNoFigureOfSameColor = currentSquare.figure?.color !== figure.color;
        const squareHasFigureOfDifferentColor = currentSquare.figure
          && currentSquare.figure.color !== figure.color;
        
        if (
          (!info.captureMovement && figureCanStop && canMoveIntoSquare
          && squareHasNoFigureOfSameColor)
          || (info.captureMovement && squareHasFigureOfDifferentColor)
        ) {
          validSquares.push(currentSquare);
        } else if (
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
        }

        if (!ignoreCollision && currentSquare.figure) {
          couldNotPass = noStop && i !== squareList.length - 1;
          lastSquare = currentSquare;
          break;
        }
      }
    }

    validSquares.forEach(validSquare => {
      const { x, y } = validSquare.coordinates;
      figure.setPossibleMove(x, y, direction);
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
  handlePawnMove(info: {
    startCoordinates: SquareCoordinates,
    endCoordinates: SquareCoordinates,
    endSquare: Square,
    figure: Figure,
  }) {
    const { figure } = info;
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
      this.openPromotePopup(figure, info.endSquare);
    }
  }
  resolveEnpassant(info: {
    startCoordinates: SquareCoordinates,
    endCoordinates: SquareCoordinates,
    endSquare: Square,
    figure: Figure,
  }) {
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
    this.figureCaptured.emit(square.figure);
    square.figure = null;
  }
  handleFirstPawnMove(info: {
    startCoordinates: SquareCoordinates,
    endCoordinates: SquareCoordinates,
    figure: Figure,
  }) {
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

  handleFirstKingMove(info: {
    startCoordinates: SquareCoordinates,
    endCoordinates: SquareCoordinates,
    startSquare: Square,
    figure: Figure,
  }) {
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

  openPromotePopup(figure: Figure, square: Square) {
    if (!figure.canPromote) return;
    this.promotionInfo = {
      figure,
      square,
    };
    this.promotePopup = true;
  }

  promoteFigure(chosenFigure: Figure) {
    if (!this.promotionInfo) return;
    const figure = chosenFigure.clone(this.playerColor);
    this.promotionInfo.square.figure = figure;
    figure.didNotMove = false;
  }

  tryMovingAPiece(square: Square | null, targetSquare: Square | null) {
    if (!targetSquare || !square?.figure) return;
    const { x: startX, y: startY } = square.coordinates;
    const { x: endX, y: endY } = targetSquare.coordinates;
    const xDifference = startX - endX;
    const yDifference = startY - endY;
    if (xDifference !== 0 && yDifference !== 0) {
      // if (square.figure.)
    }
  }

  ngOnInit(): void {
    if (Array.isArray(this.notation) && this.notation.length !== 0) {
      this.useNotation();
      return;
    }
    this.generateField();
  }

}
