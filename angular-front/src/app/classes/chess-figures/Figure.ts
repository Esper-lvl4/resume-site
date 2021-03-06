import { Events } from "src/app/classes/Events";
import { defaultLetters } from "../Square";

export class FigureMovement {
  top: number = 0;
  left: number = 0;
  right: number = 0;
  bottom: number = 0;
  topLeft: number = 0;
  topRight: number = 0;
  bottomLeft: number = 0;
  bottomRight: number = 0;
  canCapture: boolean = true;

  constructor(info: Partial<FigureMovement>) {
    const {
      top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, canCapture
    } = info;
    if (top) this.top = top;
    if (left) this.left = left;
    if (right) this.right = right;
    if (bottom) this.bottom = bottom;
    if (topLeft) this.topLeft = topLeft;
    if (topRight) this.topRight = topRight;
    if (bottomLeft) this.bottomLeft = bottomLeft;
    if (bottomRight) this.bottomRight = bottomRight;
    if (typeof canCapture === 'boolean') this.canCapture = canCapture;
  }

  clone(): FigureMovement {
    return new FigureMovement({
      top: this.top,
      left: this.left,
      right: this.right,
      bottom: this.bottom,
      topLeft: this.topLeft,
      topRight: this.topRight,
      bottomLeft: this.bottomLeft,
      bottomRight: this.bottomRight,
      canCapture: this.canCapture,
    });
  }
}

export interface CoordinatesMap {
  [key: string]: { [y: string]: string };
}

export class Figure extends Events {
  name: string;
  nameLetter: string = '';
  color: 'white' | 'black' = 'white';
  image: string = '';
  weight: number = 1;
  movement: FigureMovement | FigureMovement[];
  // prop for pieces that do not move in straight line, like knight.
  mustChangeDirection: boolean = false;
  // for pieces that can promote.
  canPromote: boolean = false;
  // for pieces that must travel foo distance when moving.
  noStop: boolean = false;
  // for king - to prevent it from moving or capturing pieces if he would be captured
  // for it.
  isCoward: boolean = false;
  // for pieces that move move through other pieces without taking them. They still
  // capture if they stop on the same square as other piece but cannot stop on the same
  // squares as allied pieces.
  ignoreCollision: boolean = false;
  // for pieces that moves differently when the capture other pieces.
  captureMovement?: FigureMovement;

  didNotMove: boolean = true;

  // moves that are possible considering current board state.
  possibleMoves: CoordinatesMap = {};
  // moves that are not possible because of current board state. Does not include moves
  // that are completely illegal for this figure. 
  impossibleMoves: CoordinatesMap = {};

  constructor(info: {
    name: Figure['name'],
    movement: Figure['movement'],
    nameLetter?: Figure['nameLetter'],
    weight?: Figure['weight'],
    color?: Figure['color'],
    image?: Figure['image'],
    mustChangeDirection?: Figure['mustChangeDirection'];
    canPromote?: Figure['canPromote'];
    noStop?: Figure['noStop'];
    isCoward?: Figure['isCoward'];
    ignoreCollision?: Figure['ignoreCollision'];
    captureMovement?: Figure['captureMovement'];
  }) {
    super();
    this.name = info.name;
    this.movement = info.movement;
    if (info.color) this.color = info.color;
    if (info.image) {
      this.image = info.image;
    } else {
      this.image = `../assets/images/${this.color}-${this.name.toLowerCase()}.svg.png`;
    }

    if (typeof info.weight === 'number') this.weight = info.weight;
    if (typeof info.mustChangeDirection === 'boolean') {
      this.mustChangeDirection = info.mustChangeDirection;
    }
    if (typeof info.canPromote === 'boolean') this.canPromote = info.canPromote;
    if (typeof info.noStop === 'boolean') this.noStop = info.noStop;
    if (typeof info.ignoreCollision === 'boolean') {
      this.ignoreCollision = info.ignoreCollision;
    }
    if (typeof info.isCoward === 'boolean') this.isCoward = info.isCoward;
    if (typeof info.nameLetter === 'string') this.nameLetter = info.nameLetter;

    if (info.captureMovement) this.captureMovement = info.captureMovement;
  };

  get numberOfMoves(): number {
    return Array.isArray(this.movement) ? this.movement.length : 1;
  }

  getCurrentMovement(index: number): FigureMovement | undefined {
    return Array.isArray(this.movement)
      ? this.movement[index]
      : (index === 0 ? this.movement : undefined);
  }

  traversePossibleMoves(handler: (x: number, y: number, direction: string) => void | boolean) {
    xLoop: for (let currentX of Object.keys(this.possibleMoves)) {
      for (let currentY of Object.keys(this.possibleMoves[currentX])) {
        const stopLoop = handler(+currentX, +currentY, this.possibleMoves[currentX][currentY]);
        if (stopLoop) break xLoop;
      }
    }
  }

  setPossibleMove(x: number, y: number, direction: string) {
    if (!this.possibleMoves[x]) this.possibleMoves[x] = {};
    this.possibleMoves[x][y] = direction;
  }

  setImpossibleMove(x: number, y: number, direction: string) {
    if (!this.impossibleMoves[x]) this.impossibleMoves[x] = {};
    this.impossibleMoves[x][y] = direction;
  }

  getPossibleMove(x: number, y: number): string | false {
    return (this.possibleMoves[x] && this.possibleMoves[x][y]) || false;
  }

  getImpossibleMove(x: number, y: number): string | false {
    return (this.impossibleMoves[x] && this.impossibleMoves[x][y]) || false;
  }

  moveIsImpossible(x: string | number, y: number): boolean {
    const targetX = typeof x === 'string'
      ? defaultLetters.findIndex(letter => letter === x) + 1
      : x;
    if (targetX === 0) return false;
    return !!(this.impossibleMoves[targetX] && this.impossibleMoves[targetX][y]);
  }

  moveIsPossible(x: string | number, y: number): boolean {
    const targetX = typeof x === 'string'
      ? defaultLetters.findIndex(letter => letter === x) + 1
      : x;
    if (targetX === 0) return false;
    return !!(this.possibleMoves[targetX] && this.possibleMoves[targetX][y]);
  }

  clearPossibleMoves() {
    this.possibleMoves = {};
    this.impossibleMoves = {};
  }

  clone(color: Figure['color']): Figure {
    return new Figure({
      name: this.name,
      nameLetter: this.nameLetter,
      color: color || this.color,
      image: this.image,
      weight: this.weight,
      mustChangeDirection: this.mustChangeDirection,
      canPromote: this.canPromote,
      noStop: this.noStop,
      isCoward: this.isCoward,
      ignoreCollision: this.ignoreCollision,
      captureMovement: this.captureMovement?.clone(),
      movement: Array.isArray(this.movement)
        ? this.movement.map(move => move.clone())
        : this.movement.clone(),
    });
  } 
}