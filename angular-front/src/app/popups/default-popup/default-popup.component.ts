import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-popup',
  templateUrl: './default-popup.component.html',
  styleUrls: ['./default-popup.component.sass']
})
export class DefaultPopupComponent {

  @Input() visible: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() confirmText: string = 'Ok';
  @Input() rejectText: string = 'Cancel';
  @Input() showConfirmButton: boolean = true;
  @Input() showRejectButton: boolean = true;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() confirm = new EventEmitter();
  @Output() reject = new EventEmitter();

  confirmClick() {
    this.confirm.emit();
  }

  rejectClick() {
    this.reject.emit();
  }

  constructor() { }

}
