import { Figure, FigureMovement } from "./Figure";

export class PawnFigure extends Figure {
  canCapturePawnInFront: boolean | 'left' | 'right' = false;

  constructor(color: Figure['color']) {
    super({
      name: 'Pawn',
      color,
      canPromote: true,
      movement: new FigureMovement({
        top: color === 'white' ? 2 : 0,
        bottom: color === 'black' ? 2 : 0,
        right: 0,
        left: 0,
        canCapture: false,
      }),
      captureMovement: new FigureMovement({
        topLeft: color === 'white' ? 1 : 0,
        topRight: color === 'white' ? 1 : 0,
        bottomLeft: color === 'black' ? 1 : 0,
        bottomRight: color === 'black' ? 1 : 0,
      })
    });
  }
}

export default PawnFigure;