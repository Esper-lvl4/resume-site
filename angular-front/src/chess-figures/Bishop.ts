import { Figure, FigureMovement } from "./Figure";

export class BishopFigure extends Figure {
  constructor(color: Figure['color']) {
    super({
      name: 'Bishop',
      color,
      weight: 3,
      movement: new FigureMovement({
        topLeft: Infinity,
        topRight: Infinity,
        bottomLeft: Infinity,
        bottomRight: Infinity,
      }),
    });
  }
}

export default BishopFigure;