import { Injectable } from "@angular/core";
import { Figure } from "../classes/chess-figures/Figure";
import { ChessField } from "../classes/ChessField";
import { Square, SquareCoordinates } from "../classes/Square";

@Injectable({
  providedIn: 'root',
})
export class PNGParser {
  constructor() {}

  convertNotationStringToArray(inputNotation: string): string[] {
    const enPassantNotation = 'e.p.';
    const notation = inputNotation
      .replace(/\s\s/g, ' ')
      .replace(/[!?]/g, '')
      .replace(/0-0/g, 'O-O')
      .replace(/0-0-0/g, 'O-O-O');
    const parts = notation.split(/\s\d{1,2}\.\s/);
    const result: string[] = [];
    parts[0] = parts[0].slice(3);
    parts.forEach(part => {
      const moves = part.split(/\s/);
      moves.forEach(move => {
        if (move === enPassantNotation) {
          result[result.length - 1] = result[result.length - 1] + ' ' + enPassantNotation;
          return;
        }
        result.push(move);
      });
    });
    return result;
  }

  convertMoveToPGN(info: {
    startCoordinates: SquareCoordinates,
    endCoordinates: SquareCoordinates,
    startSquare: Square,
    endSquare: Square,
    chessField: ChessField,
    isCapture?: boolean,
    promote?: string,
    isCheck?: boolean,
  }): string {
    const {
      startSquare,
      endSquare,
      startCoordinates: { x: startX, xLetter: startXLetter, y: startY },
      endCoordinates: { x: endX, xLetter: endXLetter, y: endY },
      chessField,
      isCapture,
      promote,
      isCheck,
    } = info;
    if (!endSquare.figure) return '';
    const figureName = endSquare.figure.nameLetter;
    if (figureName === 'K' && Math.abs(startX - endX) === 2) {
      return startX > endX ? 'O-O-O' : 'O-O';
    }
    let originalSquare = '';
    const capture = isCapture ? 'x' : '';
    const check = isCheck ? '+' : '';
    const promoteTo = promote ? `=${promote}` : '';
    if (isCapture && ((promote && figureName) || !figureName)) {
      originalSquare = startXLetter;
    } else if (figureName) {
      let recordX = false, recordY = false;
      let figureCount = 0;
      for (let square of chessField.squares) {
        if (recordX && recordY) break;
        if (!square.figure) continue;
        if (
          square.figure.name !== endSquare.figure.name
          || square.figure.color !== endSquare.figure.color
        ) continue;
        const { x, y } = square.coordinates;

        if (!square.figure.moveIsPossible(endX, endY) || (x === endX && y === endY)) continue;
        figureCount++;
        if (x === startX) recordY = true;
        if (y === startY) recordX = true;
        if (figureCount >= 2) {
          recordY = true;
          recordX = true;
        } else {
          recordY = true;
        }
      }
      originalSquare = `${recordX ? startXLetter : ''}${recordY ? startY : ''}`;
    }
    const targetSquare = `${endXLetter}${endY}`;
    return `${promote ? '' : figureName}${originalSquare}${capture}${targetSquare}${promoteTo}${check}`;
  }

  transformMoveNotation(info: {
    originalMove: string,
    color: Figure['color'],
    chessField: ChessField,
    handleKingSelection: (square: Square, figure: Figure) => void
  }): {
    targetSquare: Square,
    startingSquare: Square,
    promotionInfo: string,
  } {
    const { originalMove, color, chessField, handleKingSelection } = info;
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
    // exd6 e.p. - pawn's en passant.
    // Common parts:
    // 1) Last two symbols are target square always, except for castle move and promotion;
    // 2) First symbol is always the name of a figure, except for castle move, promotion and pawn move;
    // 3) If move is a capture, it has "x" simbol in it, after which come target square.
    if (originalMove === 'O-O' || originalMove === 'O-O-O') {
      const startingSquare = chessField
        .findSquare(square => square.figure?.name === 'King' && square.figure.color === color);
      if (!startingSquare) throw new Error('Could not make castle move - King was not found!');
      if (!startingSquare.figure?.didNotMove) throw new Error('Could not make castle move - King already did move!');
      const yCoord = color === 'white' ? 1 : chessField.height;
      const xCoord = originalMove === 'O-O' ? 'g' : 'c' ;
      handleKingSelection(startingSquare, startingSquare.figure);
      const isValidMove = startingSquare.figure.moveIsPossible(xCoord, yCoord);
      if (!isValidMove) {
        console.error(JSON.stringify(startingSquare.figure.possibleMoves));
        throw new Error('Could not make a castle move - this move is not valid!');
      }
      const targetSquare = chessField.findSquareByCoordinates(xCoord, yCoord);
      if (!targetSquare) throw new Error('Could not make a castle move - target square could not be found!');
      return {
        startingSquare,
        targetSquare: targetSquare,
        promotionInfo: '',
      };
    }
    const captureSymbol = 'x';
    const promotionSymbol = '=';
    const checkSymbol = '+';
    const checkMateSymbol = '#';
    const enPassantNotation = ' e.p.';
    const isCapture = originalMove.match(captureSymbol);
    const isPromotion = originalMove.match(promotionSymbol);
    const isCheck = originalMove[originalMove.length - 1] === checkSymbol;
    const isCheckMate = originalMove[originalMove.length - 1] === checkMateSymbol;
    const isEnPassant = originalMove.match(enPassantNotation);
    let promotionInfo = '';
    let move = originalMove;
    if (isCapture) move = move.split(captureSymbol).join('');
    if (isCheck || isCheckMate) move = move.slice(0, -1);
    if (isEnPassant) move = move.slice(0, -5);
    if (isPromotion) {
      const parts = move.split(promotionSymbol);
      promotionInfo = parts[parts.length - 1];
      move = move.replace(`=${ promotionInfo }`, '');
    }

    const figureName = move[0].toUpperCase() === move[0] ? move[0] : '';
    const targetSquareInfo = move.slice(-2);
    const startingSquareInfo = move.slice(figureName ? 1 : 0, -2);
    let startX = '';
    let startY = 0;
    const targetX = targetSquareInfo[0];
    const targetY = Number(targetSquareInfo[1]);

    if (startingSquareInfo.length === 1) {
      const isNumber = !isNaN(Number(startingSquareInfo))
      startX = isNumber ? '' : startingSquareInfo;
      startY = isNumber ? Number(startingSquareInfo) : 0;
    } else if (startingSquareInfo.length === 2) {
      startX = startingSquareInfo[0];
      startY = Number(startingSquareInfo[1]);
    }

    let startingSquare: Square | undefined;
    const targetSquare = chessField
      .findSquareByCoordinates(targetX, targetY);

    if (startX && !isNaN(startY) && startY) {
      startingSquare = chessField
        .findSquareByCoordinates(startX, startY);
    } else {
      const noNeedToMatch = !startX && (!startY || isNaN(startY));
      startingSquare = chessField.findSquare(square => {
        const xMatches = startX && square.coordinates.xLetter === startX;
        const yMatches = !isNaN(startY) && startY && square.coordinates.y === startY;
        return (xMatches || yMatches || noNeedToMatch)
          && square.figure?.nameLetter === figureName
          && square.figure.color === color
          && square.figure.moveIsPossible(targetX, targetY);
      });
    }
    if (!startingSquare || !targetSquare) {
      console.error('start: ', startingSquare, 'target: ', targetSquare);
      console.error(
        'startX:', startX,
        '\nstartY:', startY,
        '\ntargetX:', targetX,
        '\ntargetY:', targetY,
        '\nfigureName:',figureName,
        '\ncolor:', color,
      );
      throw new Error(`Could not make a move: either target or starting square could not be determined!`);
    }
    return {
      startingSquare,
      targetSquare,
      promotionInfo: isPromotion ? promotionInfo : '',
    };
  }
}