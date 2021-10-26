import { Figure, FigureMovement } from "./Figure";

export class KingFigure extends Figure {
  constructor(color: Figure['color']) {
    super({
      name: 'King',
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
}

export default KingFigure;