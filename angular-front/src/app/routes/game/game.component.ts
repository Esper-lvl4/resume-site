import { AfterViewInit, Component, OnInit } from '@angular/core';
import { connectSocket, socket } from 'src/app/websocket/connectWebsocket';
import { UserInfo, isUserInfo } from '../../classes/UserInfo';
import { isRoomInfo, RoomInfo } from '../../classes/RoomInfo';
import { WebsocketDecorator } from 'src/app/injectables/websocket';
import { Route } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  namePopup: boolean = false;
  currentRoom: RoomInfo | null = null;

  get gameHasStarted(): boolean {
    return this.currentRoom?.gameHasStarted || false;
  }

  constructor(private socket: WebsocketDecorator) { }

  saveUserInfo(userInfo: UserInfo) {
    if (!userInfo.name) {
      this.namePopup = true;
    }
    this.socket.saveUserInfo(userInfo);
  }

  isClientSide(): boolean {
    return typeof window !== 'undefined';
  }

  setNewName(name: string) {
    if (!name) return;
    this.socket.emit('setNewUserName', { name });
    if (!this.socket.userInfo) return;
    this.socket.userInfo.name = name;
    this.saveUserInfo(this.socket.userInfo);
  }

  ngOnInit(): void {
    if (this.isClientSide()) {
      this.socket.loadUserInfo();
      if (!socket) connectSocket();

      this.socket.on('saveUser', data => {
        if (!isUserInfo(data)) return;
        this.saveUserInfo(data);
      });

      this.socket.on('userIsConnected', () => {
        this.socket.emit('checkForUserRoom');
      });

      this.socket.on('userRoomCheckResult', room => {
        if (!isRoomInfo(room)) {
          return;
        }
        this.currentRoom = room;
      });

      this.socket.emit('checkUser', this.socket.userInfo || undefined);
    }
  } 

}
