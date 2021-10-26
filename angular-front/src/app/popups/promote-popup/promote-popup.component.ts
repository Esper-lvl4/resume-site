import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Figure } from 'src/app/classes/chess-figures/Figure';
import { Square } from '../../classes/Square';

@Component({
  selector: 'app-promote-popup',
  templateUrl: './promote-popup.component.html',
  styleUrls: ['./promote-popup.component.sass']
})
export class PromotePopupComponent implements OnInit {
  @Input() promoteVariants: Figure[] = [];
  @Input() promotionInfo: { figure: Figure, square: Square } | null = null;
  @Input() visible: boolean = false;
  @Input() playerColor: 'white' | 'black' = 'white';
  @Input() width: number = 8;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() promoteVariantChosen = new EventEmitter<Figure>();

  get left(): number {
    if (!this.promotionInfo) return 0;
    return this.playerColor === 'white'
      ? (this.promotionInfo.square.coordinates.x - 1) * 80
      : (this.width - this.promotionInfo.square.coordinates.x) * 80;
  }

  constructor() {}

  close() {
    this.toggle(false);
  }

  choosePromoteVariant(figure: Figure) {
    this.promoteVariantChosen.emit(figure);
    this.close();
  }

  toggle(value: boolean) {
    this.visible = value;
    this.visibleChange.emit(this.visible);
  }

  ngOnInit(): void {
  }

}
