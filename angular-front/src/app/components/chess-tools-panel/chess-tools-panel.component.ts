import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Figure } from 'src/app/classes/chess-figures/Figure';
import RoomInfo from 'src/app/classes/RoomInfo';
import UserInfo from 'src/app/classes/UserInfo';
import { WebsocketDecorator } from 'src/app/injectables/websocket';

@Component({
  selector: 'app-chess-tools-panel',
  templateUrl: './chess-tools-panel.component.html',
  styleUrls: ['./chess-tools-panel.component.sass']
})
export class ChessToolsPanelComponent implements OnChanges {
  @Input() room!: RoomInfo;
  @Input() winningPlayer!: UserInfo;

  rematchTimer = 60;
  surrenderBlock = false;

  get currentTurnInfo(): string {
    if (this.room?.isFinished && this.winningPlayer) {
      return `${this.winningPlayer.name || 'Anonymous player'}(${this.winningPlayer.color}) won the game.`;
    }
    return this.currentTurn === this.playerColor
      ? 'Your turn'
      : 'Opponent\'s turn';
  }

  get gameIsFinished(): boolean {
    return !!this.room?.isFinished;
  }

  get rematchIsPossible(): boolean {
    return this.room.isFinished && this.rematchTimer > 0 && this.room.players.length === 2;
  }

  get gameNotation(): string[] {
    return this.room.gameNotation || [];
  }

  get currentTurn(): Figure['color'] {
    return this.gameNotation.length % 2 === 0 ? 'white' : 'black';
  }

  get clientPlayer(): UserInfo | undefined {
    if (!this.socket.userInfo) return;
    const { id } = this.socket.userInfo
    return this.room?.players.find(player => player.id === id);
  }

  get playerColor(): Figure['color'] {
    return this.clientPlayer?.color || 'white';
  }

  constructor(
    private socket: WebsocketDecorator,
    private router: Router,
  ) { }

  trySurrender() {
    if (!this.surrenderBlock) {
      this.surrenderBlock = true;
      setTimeout(() => {
        this.surrenderBlock = false;
      }, 4000);
      return;
    }
    this.socket.emit('surrenderGame');
  }

  rematch() {
    this.socket.emit('restartGame');
  }

  leave() {
    this.router.navigate(['game', 'lobby']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.room) return;
    if (
      !changes.room.previousValue?.isFinished
      && changes.room.currentValue?.isFinished
    ) {
      this.rematchTimer = 60;
      const timer = setInterval(() => {
        if (!this?.rematchTimer) {
          clearInterval(timer);
          return;
        }
        this.rematchTimer--;
      }, 1000);
    }
  }
}
