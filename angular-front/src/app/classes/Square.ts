import { Figure } from "src/chess-figures/Figure";

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
  _x: string;
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
