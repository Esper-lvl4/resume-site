import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.sass']
})
export class DefaultButtonComponent {
  @Input() disabled: boolean = false;

  get isDisabled(): 'disabled' | undefined {
    return this.disabled? 'disabled' : undefined;
  }
}