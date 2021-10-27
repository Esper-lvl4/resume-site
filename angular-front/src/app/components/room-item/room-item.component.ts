import { Component, Input } from '@angular/core';
import RoomInfo from 'src/app/classes/RoomInfo';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.sass']
})
export class RoomItemComponent {

  @Input() room!: RoomInfo
  @Input() isCurrentRoom: boolean = false;
  @Input() isChosenRoom: boolean = false;

  get name(): string {
    return this.room?.name || '';
  }

  get playerCount(): string {
    return `${this.room?.players.length || 0}/2`;
  }

  get hasStarted(): string {
    return this.room?.gameHasStarted ? 'Yes' : 'No';
  }

  constructor() { }


}
