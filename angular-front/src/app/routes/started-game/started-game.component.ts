import { Component, OnInit } from '@angular/core';
import { Figure } from 'src/app/classes/chess-figures/Figure';
import { Router, ActivatedRoute } from '@angular/router';
import RoomInfo from 'src/app/classes/RoomInfo';

@Component({
  selector: 'app-started-game',
  templateUrl: './started-game.component.html',
  styleUrls: ['./started-game.component.sass']
})
export class StartedGameComponent implements OnInit {

  yourCapturedFigures: Figure[] = [];
  opponentsCapturedFigures: Figure[] = [];
  gameId: number = 0;
  room!: RoomInfo;

  constructor(private router: Router, private route: ActivatedRoute) { }

  isClientSide(): boolean {
    return typeof window !== 'undefined';
  }

  figureCaptured(figure: Figure) {
    this.yourCapturedFigures.push(figure);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.gameId = isNaN(id) ? 0 : +id;
      if (!this.gameId || this.gameId < 0) this.router.navigate(['game', 'lobby']);
      // Finish game loading logic.
      // Create lobby components and connect them to websocket server.
      // Write all communications between started game and websocket server.
      // Make chess field convert game notation into board state. It should not parse
      // notation if it's invalid.
      // Make turns and timer logic.
      // Buy a hosting and then configure nginx.
      // Make everything slightly preetier.
    });
  }

}
