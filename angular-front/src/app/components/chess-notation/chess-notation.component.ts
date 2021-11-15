import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-notation',
  templateUrl: './chess-notation.component.html',
  styleUrls: ['./chess-notation.component.sass']
})
export class ChessNotationComponent {
  @Input() value: string[] = [];

  get notation(): string {
    return this.value.reduce((acc, move, index) => {
      const startOfMove = index % 2 === 0;
      return `${acc}${ startOfMove ? (index + 1) + '.' : '' } ${ move }${ startOfMove ? '' : '\n' }`;
    }, '');
  }

  constructor() { }

}
