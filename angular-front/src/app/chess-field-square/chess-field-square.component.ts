import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Figure } from 'src/chess-figures/Figure';
import { Square, SquareCoordinates } from '../classes/Square';

@Component({
  selector: 'app-chess-field-square',
  templateUrl: './chess-field-square.component.html',
  styleUrls: ['./chess-field-square.component.sass']
})
export class ChessFieldSquareComponent implements OnInit {

  @Input() square: Square | null = null;
  @Input() playerColor: Figure['color'] = 'white';
  @Input() width: number = 8;
  @Input() height: number = 8;

  @Output() grabFigure = new EventEmitter<Square | null>();
  @Output() dropFigure = new EventEmitter<Square | null>();
  @Output() clearPossibleMoves = new EventEmitter<never>();
  @Output() targetSquareChange = new EventEmitter<Square | null>();
  @Output() captureFigure = new EventEmitter<Square | null>();

  get smallLetter(): string {
    return this.playerColor === 'white'
      ? (this.coordinates.y === 1 ? this.coordinates.xLetter : '')
      : (this.coordinates.y === this.height ? this.coordinates.xLetter : '');
  }

  get smallNumber(): string {
    return this.playerColor === 'white'
      ? (this.coordinates.x === this.width ? this.coordinates.y + '' : '')
      : (this.coordinates.x === 1 ? this.coordinates.y + '' : '');
  }

  get coordinates(): Square['coordinates'] {
    return this.square?.coordinates || new SquareCoordinates('a', 1);
  }

  get isBlack(): Square['isBlack'] {
    return this.square?.isBlack || false;
  }

  get figure(): Square['figure'] {
    return this.square?.figure || null;
  }

  get isPossibleMove(): Square['isPossibleMove'] {
    return this.square?.isPossibleMove || false;
  }

  constructor() { }

  squareClick() {
    if (this.square?.figure && !this.square?.isPossibleMove) {
      this.grabFigure.emit(this.square);
      return;
    }

    if (!this.square?.figure && this.square?.isPossibleMove) {
      this.dropFigure.emit(this.square);
      return;
    }

    if (this.square?.figure && this.square?.isPossibleMove) {
      this.captureFigure.emit(this.square);
    }

    this.clearPossibleMoves.emit();
  }

  chooseFigure() {
    this.grabFigure.emit(this.square);
  }

  unchooseFigure() {
    this.dropFigure.emit(this.square);
  }

  changeTargetSquare() {
    this.targetSquareChange.emit(this.square);
  }

  ngOnInit(): void {
  }

}
