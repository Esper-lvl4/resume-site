import { Figure } from "src/app/classes/chess-figures/Figure";
import { KingFigure } from "./chess-figures";

export const defaultLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export class Square {
  coordinates: SquareCoordinates;
  isBlack: boolean;
  figure: Figure | null = null;
  isPossibleMove: boolean = false;

  constructor(info: { x: string, y: number, figure?: Figure | null, isBlack: boolean }) {
    this.coordinates = new SquareCoordinates(info.x, info.y);
    this.isBlack = info.isBlack;
    if (info.figure) this.figure = info.figure;
  }
}

export class SquareCoordinates {
  private _x: string;
  y: number;

  constructor(x: string, y: number) {
    this._x = x;
    this.y = y;
  }

  get x(): number {
    return defaultLetters.indexOf(this._x) + 1;
  }

  get xLetter(): string  {
    return this._x;
  }
}

export type SquareWithFigure = Omit<Square, 'figure'> & { figure: Figure };
export type SquareWithKing = Omit<Square, 'figure'> & { figure: KingFigure };