import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  get isHost(): boolean {
    if (!this.currentRoom || !this.socket.userInfo) return false;
    return this.currentRoom.hostId === this.socket.userInfo.id;
  }

  constructor(
    private router: Router,
    private socket: WebsocketDecorator,
  ) { }

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

  startGame() {
    if (!this.currentRoom) return;
    this.socket.emit('startGame', { roomId: this.currentRoom.id });
  }

  setCurrentRoom(room: any) {
    if (!isRoomInfo(room)) {
      this.currentRoom = null;
      this.socket.gameId = 0;
      return;
    }
    this.currentRoom = room;
    this.socket.gameId = room.id;
    this.goToGameRoute();
  }

  goToGameRoute() {
    if (!this.currentRoom?.gameHasStarted || this.currentRoom?.isFinished) return;
    this.router.navigate(['game', this.currentRoom.id.toString()]);
  }

  ngOnInit(): void {
    if (!this.isClientSide) return;

    this.socket.on('userRoomCheckResult', room => {
      this.setCurrentRoom(room);
    });

    this.socket.on('refreshRoomList', roomList => {
      if (!Array.isArray(roomList)) return;
      this.roomList = roomList.filter(room => isRoomInfo(room));
      if (!this.currentRoom) return;
      const currentRoom = this.roomList.find(room => room.id === this.currentRoom?.id);
      this.setCurrentRoom(currentRoom);
    });

    this.socket.on('joinedRoom', room => {
      this.setCurrentRoom(room);
    });

    this.socket.on('leftRoom', () => {
      this.setCurrentRoom(null);
    });

    this.socket.on('updateCurrentGame', room => {
      if (isRoomInfo(room)) this.setCurrentRoom(room);
    });

    this.socket.emit('getRoomList');
    this.socket.emit('checkForUserRoom');
  }

}
