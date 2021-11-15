import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Figure } from 'src/app/classes/chess-figures/Figure';

@Component({
  selector: 'app-chess-advantage',
  templateUrl: './chess-advantage.component.html',
  styleUrls: ['./chess-advantage.component.sass']
})
export class ChessAdvantageComponent implements OnInit {

  @Input() figures: Figure[] = [];
  @Output() figuresChange = new EventEmitter<Figure[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
