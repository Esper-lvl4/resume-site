import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: '', component: HomeComponent },
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
