import { Figure, FigureMovement } from "./Figure";

export class KingFigure extends Figure {
  threateningFigures: Figure[] = [];
  constructor(color: Figure['color']) {
    super({
      name: 'King',
      nameLetter: 'K',
      color,
      isCoward: true,
      movement: new FigureMovement({
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
        topLeft: 1,
        topRight: 1,
        bottomLeft: 1,
        bottomRight: 1,
      }),
    });
  }

  get isInCheck(): boolean {
    return this.threateningFigures.length !== 0;
  }
}

export default KingFigure;