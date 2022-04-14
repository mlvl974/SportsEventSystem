import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMatchComponent } from './match/add-match/add-match.component';
import { ListMatchComponent } from './match/list-match/list-match.component';
import { EditMatchComponent } from './match/edit-match/edit-match.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AddPlayerComponent } from './player/add-player/add-player.component';
import { EditPlayerComponent } from './player/edit-player/edit-player.component';
import { ListPlayerComponent } from './player/list-player/list-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMatchComponent,
    ListMatchComponent,
    EditMatchComponent,
    NavbarComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    ListPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
