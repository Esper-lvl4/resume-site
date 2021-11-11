import { Component, Input, OnInit } from '@angular/core';
import { KingFigure } from 'src/app/classes/chess-figures';
import { Figure } from 'src/app/classes/chess-figures/Figure';

@Component({
  selector: 'app-chess-figure',
  templateUrl: './chess-figure.component.html',
  styleUrls: ['./chess-figure.component.sass']
})
export class ChessFigureComponent implements OnInit {
  @Input() figure: Figure | null = null;

  get name() {
    return this.figure?.name || '';
  }

  get image() {
    return this.figure?.image || '#';
  }

  get figureIsInCheck() {
    return this.figure instanceof KingFigure && this.figure.isInCheck;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
