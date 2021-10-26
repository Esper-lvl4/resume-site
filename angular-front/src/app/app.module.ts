import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessFieldComponent } from './chess-field/chess-field.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { ChessFieldSquareComponent } from './chess-field-square/chess-field-square.component';
import { ChessFigureComponent } from './chess-figure/chess-figure.component';
import { PromotePopupComponent } from './promote-popup/promote-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessFieldComponent,
    GameComponent,
    HomeComponent,
    WildCardComponent,
    ChessFieldSquareComponent,
    ChessFigureComponent,
    PromotePopupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
