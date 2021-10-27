import { Component, EventEmitter, Input, Output } from '@angular/core';
import RoomInfo from 'src/app/classes/RoomInfo';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.sass']
})
export class RoomListComponent {

  @Input() list: RoomInfo[] = [];
  @Input() chosenRoom: RoomInfo | null = null;
  @Input() currentRoom: RoomInfo | null = null;

  @Output() roomClick = new EventEmitter<RoomInfo>();

  constructor() { }

  emitRoomClick(room: RoomInfo) {
    this.roomClick.emit(room);
  }

}
