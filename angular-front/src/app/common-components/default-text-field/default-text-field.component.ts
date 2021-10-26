import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-text-field',
  templateUrl: './default-text-field.component.html',
  styleUrls: ['./default-text-field.component.sass']
})
export class DefaultTextFieldComponent {

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  get localValue(): string {
    return this.value;
  }

  set localValue(value) {
    this.valueChange.emit(value);
  }

  constructor() { }

}
