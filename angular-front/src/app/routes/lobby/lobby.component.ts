import { Component, OnInit } from '@angular/core';
import RoomInfo, { isRoomInfo } from 'src/app/classes/RoomInfo';
import { WebsocketDecorator } from 'src/app/injectables/websocket';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.sass']
})
export class LobbyComponent implements OnInit {

  roomList: RoomInfo[] = [];
  hostRoomPopup: boolean = false;
  targetRoom: RoomInfo | null = null;
  currentRoom: RoomInfo | null = null;

  get isInRoom(): boolean {
    return !!this.currentRoom;
  }

  get roomIsFull(): boolean {
    if (!this.currentRoom) return false;
    const { players, maxPlayers } = this.currentRoom;
    return players.length === maxPlayers;
  }

  get targetRoomIsFull(): boolean {
    if (!this.targetRoom) return false;
    const { players, maxPlayers } = this.targetRoom;
    return players.length === maxPlayers;
  }

  constructor(private socket: WebsocketDecorator) { }

  isClientSide(): boolean {
    return typeof window !== 'undefined';
  }

  setTargetRoom(room?: RoomInfo) {
    this.targetRoom = room || null;
  }

  hostRoom() {
    this.hostRoomPopup = true;
  }

  createRoom(name: string) {
    this.socket.emit('createRoom', { name });
  }

  joinRoom() {
    if (!this.targetRoom) return;
    this.socket.emit('joinRoom', { roomId: this.targetRoom.id });
  }

  leaveRoom() {
    if (!this.currentRoom) return;
    this.socket.emit('leaveRoom', { roomId: this.currentRoom.id });
  }

  setCurrentRoom(room: any) {
    if (!isRoomInfo(room)) {
      this.currentRoom = null;
      this.socket.gameId = 0;
      return;
    }
    this.currentRoom = room;
    this.socket.gameId = room.id;
  }

  ngOnInit(): void {
    if (!this.isClientSide) return;

    this.socket.on('userRoomCheckResult', room => {
      this.setCurrentRoom(room);
    });

    this.socket.on('refreshRoomList', roomList => {
      if (!Array.isArray(roomList)) return;
      this.roomList = roomList.filter(room => isRoomInfo(room));
    });

    this.socket.on('joinedRoom', room => {
      this.setCurrentRoom(room);
    });

    this.socket.on('leftRoom', () => {
      this.setCurrentRoom(null);
    });

    this.socket.emit('getRoomList');
  }

}
