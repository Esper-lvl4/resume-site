import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessFieldComponent } from './components/chess-field/chess-field.component';
import { GameComponent } from './routes/game/game.component';
import { HomeComponent } from './routes/home/home.component';
import { WildCardComponent } from './routes/wild-card/wild-card.component';
import { ChessFieldSquareComponent } from './components/chess-field-square/chess-field-square.component';
import { ChessFigureComponent } from './components/chess-figure/chess-figure.component';
import { PromotePopupComponent } from './popups/promote-popup/promote-popup.component';
import { NameSetPopupComponent } from './popups/name-set-popup/name-set-popup.component';
import { FormsModule } from '@angular/forms';
import { DefaultPopupComponent } from './popups/default-popup/default-popup.component';
import { DefaultButtonComponent } from './common-components/default-button/default-button.component';
import { DefaultTextFieldComponent } from './common-components/default-text-field/default-text-field.component';
import { LobbyComponent } from './routes/lobby/lobby.component';
import { StartedGameComponent } from './routes/started-game/started-game.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { HostRoomPopupComponent } from './popups/host-room-popup/host-room-popup.component';
import { AboutComponent } from './routes/about/about.component';
import { ChessAdvantageComponent } from './components/chess-advantage/chess-advantage.component';
import { ChessNotationComponent } from './components/chess-notation/chess-notation.component';
import { ChessToolsPanelComponent } from './components/chess-tools-panel/chess-tools-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessFieldComponent,
    GameComponent,
    HomeComponent,
    WildCardComponent,
    ChessFieldSquareComponent,
    ChessFigureComponent,
    PromotePopupComponent,
    NameSetPopupComponent,
    DefaultPopupComponent,
    DefaultButtonComponent,
    DefaultTextFieldComponent,
    LobbyComponent,
    StartedGameComponent,
    RoomListComponent,
    RoomItemComponent,
    HostRoomPopupComponent,
    AboutComponent,
    ChessAdvantageComponent,
    ChessNotationComponent,
    ChessToolsPanelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
