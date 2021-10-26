import { AfterViewInit, Component, OnInit } from '@angular/core';
import { connectSocket, socket } from 'src/app/websocket/connectWebsocket';
import { UserInfo, isUserInfo } from '../../classes/UserInfo';
import { isRoomInfo, RoomInfo } from '../../classes/RoomInfo';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  userInfo: UserInfo | null = null;
  namePopup: boolean = false;
  currentRoom: RoomInfo | null = null;

  get gameHasStarted(): boolean {
    return this.currentRoom?.gameHasStarted || false;
  }

  constructor() { }


  loadUserInfo(): UserInfo | null {
    if (this.userInfo) return this.userInfo;
    const infoString = localStorage.getItem('ghost-chess-info');
    if (!infoString) return null;
    const info = JSON.parse(infoString);
    console.log(info);
    if (!isUserInfo(info)) return null;
    this.userInfo = info;
    return info;
  }

  saveUserInfo(userInfo: UserInfo) {
    if (!userInfo.name) {
      this.namePopup = true;
    }
    localStorage.setItem('ghost-chess-info', JSON.stringify(userInfo));
    this.userInfo = userInfo;
  }

  isClientSide(): boolean {
    return typeof window !== 'undefined';
  }

  setNewName(name: string) {
    if (!name) return;
    this.event('setNewUserName', { name });
    if (!this.userInfo) return;
    this.userInfo.name = name;
    this.saveUserInfo(this.userInfo);
  }

  event(event: string, data?: any) {
    if (!socket) return;
    const info: { [key: string]: any } = {
      id: this.userInfo?.id,
    };
    if (typeof data === 'object' && data) {
      Object.keys(data).forEach(key => {
        info[key] = data[key];
      });
    } else if (data) {
      info.info = data;
    }
    socket.emit(event, info);
  }

  listen(event: string, handler: (data: any) => void) {
    if (!socket) return;
    socket.on(event, handler);
  }

  ngOnInit(): void {
    if (this.isClientSide()) {
      this.loadUserInfo();
      if (!socket) connectSocket();

      this.listen('saveUser', data => {
        if (!isUserInfo(data)) return;
        this.saveUserInfo(data);
      });

      this.listen('userIsConnected', () => {
        this.event('checkForUserRoom');
      });

      this.listen('userRoomCheckResult', room => {
        if (!isRoomInfo(room)) {
          return;
        }
        this.currentRoom = room;
      });

      this.event('checkUser', this.userInfo || undefined);
    }
  } 

}
