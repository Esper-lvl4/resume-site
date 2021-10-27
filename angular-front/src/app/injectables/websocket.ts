import { Injectable } from "@angular/core";
import UserInfo, { isUserInfo } from "../classes/UserInfo";
import { socket } from "../websocket/connectWebsocket";

@Injectable({
  providedIn: 'root',
})
export class WebsocketDecorator {
  userInfo: UserInfo | null = null;
  gameId: number = 0;

  constructor() {}

  loadUserInfo(): UserInfo | null {
    if (this.userInfo) return this.userInfo;
    const infoString = localStorage.getItem('ghost-chess-info');
    if (!infoString) return null;
    const info = JSON.parse(infoString);
    if (!isUserInfo(info)) return null;
    this.userInfo = info;
    return info;
  }

  saveUserInfo(userInfo: UserInfo) {
    localStorage.setItem('ghost-chess-info', JSON.stringify(userInfo));
    this.userInfo = userInfo;
  }

  emit(event: string, data?: any) {
    if (!socket) return;
    const info: { [key: string]: any } = {
      id: this.userInfo?.id,
    };
    if (this.gameId !== 0) {
      info.gameId = this.gameId;
    }
    if (typeof data === 'object' && data) {
      Object.keys(data).forEach(key => {
        info[key] = data[key];
      });
    } else if (data) {
      info.info = data;
    }
    socket.emit(event, info);
  }

  on(event: string, handler: (data: any) => void) {
    if (!socket) return;
    socket.on(event, handler);
  }
}