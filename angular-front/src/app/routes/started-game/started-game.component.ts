import { Component, OnInit } from '@angular/core';
import { Figure } from 'src/app/classes/chess-figures/Figure';
import { Router, ActivatedRoute } from '@angular/router';
import RoomInfo, { isRoomInfo } from 'src/app/classes/RoomInfo';
import { WebsocketDecorator } from 'src/app/injectables/websocket';

@Component({
  selector: 'app-started-game',
  templateUrl: './started-game.component.html',
  styleUrls: ['./started-game.component.sass']
})
export class StartedGameComponent implements OnInit {
  yourCapturedFigures: Figure[] = [];
  opponentsCapturedFigures: Figure[] = [];
  room!: RoomInfo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private socket: WebsocketDecorator,
  ) { }

  isClientSide(): boolean {
    return typeof window !== 'undefined';
  }

  figureCaptured(figure: Figure) {
    this.yourCapturedFigures.push(figure);
  }

  onPlayerMove(move: string) {
    this.socket.emit('makeMove', { move });
  }

  ngOnInit(): void {
    if (!this.isClientSide) return;
    this.socket.on('roomSearchResult', room => {
      if (!isRoomInfo(room)) {
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
    
    this.route.params.subscribe(params => {
      const { id } = params;
      this.socket.gameId = isNaN(id) ? 0 : +id;
      if (!this.socket.gameId || this.socket.gameId < 0) {
        this.router.navigate(['game', 'lobby']);
        return;
      }
      this.socket.emit('getRoom');
      // Show player's advantage or disadvantage, using pieces weight.
      // Show game notation to the user (formatted a little bit).
      // Make timer logic.
      // Make everything slightly preetier.
    });
  }

}
