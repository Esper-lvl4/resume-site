import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routes/about/about.component';
import { GameComponent } from './routes/game/game.component';
import { LobbyComponent } from './routes/lobby/lobby.component';
import { StartedGameComponent } from './routes/started-game/started-game.component';
import { WildCardComponent } from './routes/wild-card/wild-card.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    children: [
      { path: 'lobby', component: LobbyComponent },
      { path: ':id', component: StartedGameComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: '', component: AboutComponent },
  { path: '**', component: WildCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
