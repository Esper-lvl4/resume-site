import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import RoomInfo, { isRoomInfo } from 'src/app/classes/RoomInfo';
import { WebsocketDecorator } from 'src/app/injectables/websocket';
import UserInfo, { isUserInfo } from 'src/app/classes/UserInfo';

@Component({
  selector: 'app-started-game',
  templateUrl: './started-game.component.html',
  styleUrls: ['./started-game.component.sass']
})
export class StartedGameComponent implements OnInit, OnDestroy {
  room!: RoomInfo;
  winningPlayer!: UserInfo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private socket: WebsocketDecorator,
  ) { }

  isClientSide(): boolean {
    return typeof window !== 'undefined';
  }

  onPlayerMove(move: string) {
    this.socket.emit('makeMove', { move });
  }

  ngOnInit(): void {
    if (!this.isClientSide) return;
    this.socket.on('roomSearchResult', room => {
      if (!isRoomInfo(room) || room.isFinished) {
        this.socket.gameId = 0;
        this.router.navigate(['game', 'lobby']);
        return;
      }
      this.room = room;
    });

    this.socket.on('synchronizeGame', room => {
      if (!isRoomInfo(room)) return;
      this.room = room;
    });

    this.socket.on('gameRestarted', room => {
      if (!isRoomInfo(room)) return;
      this.room = room;
    })

    this.socket.on('playerWon', (info) => {
      if (!info || typeof info !== 'object') return;
      const { room, player } = info;
      if (!isRoomInfo(room) || !isUserInfo(player)) return;
      this.room = room;
      this.winningPlayer = player;
    })
    
    this.route.params.subscribe(params => {
      const { id } = params;
      this.socket.gameId = isNaN(id) ? 0 : +id;
      if (!this.socket.gameId || this.socket.gameId < 0) {
        this.router.navigate(['game', 'lobby']);
        return;
      }
      this.socket.emit('getRoom');
      // Make timer logic.
      // Make everything slightly preetier.
    });
  }

  ngOnDestroy() {
    if (this.room?.isFinished) {
      this.socket.emit('leftFinishedRoom');
    }
  }
  /* Bugs.
    
  */
}
