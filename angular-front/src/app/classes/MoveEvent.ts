import { Figure } from "./chess-figures/Figure";
import { Square, SquareCoordinates } from "./Square";

export class MoveEvent {
  startCoordinates: SquareCoordinates;
  endCoordinates: SquareCoordinates;
  startSquare: Square;
  endSquare: Square;
  figure: Figure;
  capturedFigure?: Figure;
  isCapture?: boolean;
  automatic?: boolean;
  promotionInfo?: string;

  constructor(info: {
    startCoordinates: SquareCoordinates;
    endCoordinates: SquareCoordinates;
    startSquare: Square;
    endSquare: Square;
    figure: Figure;
    capturedFigure?: Figure;
    isCapture?: boolean;
    automatic?: boolean;
    promotionInfo?: string;
  }) {
    this.startCoordinates = info.startCoordinates;
    this.endCoordinates = info.endCoordinates;
    this.startSquare = info.startSquare;
    this.endSquare = info.endSquare;
    this.figure = info.figure;
    this.isCapture = info.isCapture;
    this.automatic = info.automatic;
    this.promotionInfo = info.promotionInfo;
  }
}

export default MoveEvent;