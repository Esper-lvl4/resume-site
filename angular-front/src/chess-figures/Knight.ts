import { Figure, FigureMovement } from "./Figure";

export class KnightFigure extends Figure {
  constructor(color: Figure['color']) {
    super({
      name: 'Knight',
      color,
      weight: 3,
      mustChangeDirection: true,
      ignoreCollision: true,
      noStop: true,
      movement: [
        new FigureMovement({
          top: 2,
          bottom: 2,
          left: 2,
          right: 2,
        }),
        new FigureMovement({
          top: 1,
          bottom: 1,
          left: 1,
          right: 1,
        }),
      ],
    });
  }
}

export default KnightFigure;