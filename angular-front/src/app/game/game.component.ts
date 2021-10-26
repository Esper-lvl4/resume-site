import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Figure } from 'src/chess-figures/Figure';
import { connectSocket, socket } from 'src/assets/scripts/connectWebsocket';

interface UserInfo {
  id: string;
  name: string;
}

function isUserInfo(item: any): item is UserInfo {
  return item && typeof item === 'object'
    && typeof item.id === 'string' && typeof item.name === 'string';
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements AfterViewInit {

  yourCapturedFigures: Figure[] = [];
  opponentsCapturedFigures: Figure[] = [];
  userInfo: UserInfo | null = null;

  constructor() { }

  figureCaptured(figure: Figure) {
    this.yourCapturedFigures.push(figure);
  }

  loadUserInfo(): UserInfo | null {
    if (this.userInfo) return this.userInfo;
    const infoString = localStorage.getItem('ghost-chess-info');
    if (!infoString) return null;
    const info = JSON.parse(infoString);
    if (!isUserInfo(info)) return null;
    this.userInfo = info;
    return info;
  }

  isClient(): boolean {
    return typeof window !== 'undefined';
  }

  ngAfterViewInit(): void {
    if (this.isClient()) {
      this.loadUserInfo();
      if (!socket) connectSocket();
      socket?.emit('checkUser', this.userInfo || undefined);
    }
  } 

}
