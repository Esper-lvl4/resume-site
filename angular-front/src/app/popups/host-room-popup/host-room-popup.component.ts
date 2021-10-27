import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-host-room-popup',
  templateUrl: './host-room-popup.component.html',
  styleUrls: ['./host-room-popup.component.sass']
})
export class HostRoomPopupComponent {

  @Input() visible: boolean = false;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() hostRoom = new EventEmitter<string>();

  name: string = '';

  confirm() {
    this.hostRoom.emit(this.name);
    this.close();
  }

  close() {
    this.visibleChange.emit(false);
    this.name = '';
  }

  constructor() { }

}
