import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-name-set-popup',
  templateUrl: './name-set-popup.component.html',
  styleUrls: ['./name-set-popup.component.sass']
})
export class NameSetPopupComponent {

  @Input() visible: boolean = false;
  @Input() name: string = '';

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() setNewName = new EventEmitter<string>();

  currentName: string = '';

  constructor() { }

  close() {
    this.toggle(false);
    this.currentName = '';
  }

  confirm() {
    this.setNewName.emit(this.currentName);
    this.close();
  }

  toggle(value: boolean) {
    this.visible = value;
    this.visibleChange.emit(this.visible);
    if (value) this.currentName = this.name;
  }

}
