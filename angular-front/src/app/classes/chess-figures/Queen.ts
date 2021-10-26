import { Figure, FigureMovement } from "./Figure";

export class QueenFigure extends Figure {
  constructor(color: Figure['color']) {
    super({
      name: 'Queen',
      color,
      weight: 9,
      movement: new FigureMovement({
        top: Infinity,
        bottom: Infinity,
        left: Infinity,
        right: Infinity,
        topLeft: Infinity,
        topRight: Infinity,
        bottomLeft: Infinity,
        bottomRight: Infinity,
      }),
    });
  }
}

export default QueenFigure;