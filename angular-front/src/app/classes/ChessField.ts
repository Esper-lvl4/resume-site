import { BishopFigure, KingFigure, KnightFigure, PawnFigure, QueenFigure, RookFigure } from "src/app/classes/chess-figures";
import { Figure } from "src/app/classes/chess-figures/Figure";
import { Events } from "./Events";
import { defaultLetters, Square } from "./Square";

export class ChessField extends Events {
  squares: Square[] = [];
  width: number = 8;
  height: number = 8;
  fieldLetters: string[] = [];
  playerColor: 'white' | 'black' = 'white';

  constructor(width?: number, height?: number) {
    super();
    if ((width && width > 8) || (height && height > 8)) {
      throw new Error('Only 8 x 8 field or smaller is supported');
    }
    if (width) this.width = width;
    if (height) this.height = height;
    this.fieldLetters = defaultLetters.slice(0, width);
  }

  get promoteVariants(): Figure[] {
    return this.playerColor === 'white' ? this.promoteVariantsWhite : this.promoteVariantsBlack;
  }

  get promoteVariantsWhite(): Figure[] {
    return [
      new QueenFigure('white'), new RookFigure('white'),
      new BishopFigure('white'), new KnightFigure('white'),
    ]
  }

  get promoteVariantsBlack(): Figure[] {
    return [
      new QueenFigure('black'), new RookFigure('black'),
      new BishopFigure('black'), new KnightFigure('black'),
    ]
  }

  generate(playerColor: 'black' | 'white'): Figure[] {
    this.squares = [];
    this.playerColor = playerColor;
    const eventFigures: Figure[] = [];
    let y = playerColor === 'white' ? this.height : 1;
    let x = playerColor === 'white' ? 1 : this.width;
    const checkOuterCondition = playerColor === 'white'
      ? (y: number) => y >= 1
      : (y: number) => y <= this.height;
    const checkInnerCondition = playerColor === 'white'
      ? (x: number) => x <= this.width
      : (x: number) => x >= 1;
    const outerIncrement = playerColor === 'white'
      ? () => y--
      : () => y++;
    const innerIncrement = playerColor === 'white'
      ? () => x++
      : () => x--;
    const resetX = playerColor === 'white' ? 1 : this.width;
    
    while(checkOuterCondition(y)) {
      while (checkInnerCondition(x)) {
        let figure: Square['figure'] = null;
        if (y === 2 || y === 7) {
          figure = new PawnFigure(y === 2 ? 'white' : 'black');
          eventFigures.push(figure);
        }
        if (y === 1 || y === 8) {
          const color = y === 1 ? 'white' : 'black';
          if (x === 1 || x === 8) {
            figure = new RookFigure(color);
            eventFigures.push(figure);
          }
          if (x === 2 || x === 7) figure = new KnightFigure(color);
          if (x === 3 || x === 6) figure = new BishopFigure(color);
          if (x === 4) figure = new QueenFigure(color);
          if (x === 5) {
            figure = new KingFigure(color);
            eventFigures.push(figure);
          }
        }
        this.squares.push(new Square({
          x: this.fieldLetters[x - 1],
          y,
          figure,
          isBlack: x % 2 === y % 2,
        }));
        innerIncrement();
      }
      x = resetX;
      outerIncrement();
    }
    return eventFigures;
  }

  findSquares(handler: (square: Square) => boolean): Square[] {
    return this.squares.filter(handler);
  }

  findSquare(handler: (square: Square) => boolean): Square | undefined {
    return this.squares.find(handler);
  }

  findSquareByCoordinates(x: string | number, y: number) {
    return typeof x === 'string'
      ? this.findSquare(square => {
          const { xLetter, y: squareY } = square.coordinates;
          return xLetter === x && squareY === y;
        })
      : this.findSquare(square => {
          const { x: squareX, y: squareY } = square.coordinates;
          return squareX === x && squareY === y;
        });
  }
}