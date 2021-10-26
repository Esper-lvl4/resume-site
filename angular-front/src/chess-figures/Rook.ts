import { Figure, FigureMovement } from "./Figure";

export class RookFigure extends Figure {
  constructor(color: Figure['color']) {
    super({
      name: 'Rook',
      color,
      weight: 5,
      movement: new FigureMovement({
        top: Infinity,
        bottom: Infinity,
        left: Infinity,
        right: Infinity,
      }),
    });
  }
}

export default RookFigure;