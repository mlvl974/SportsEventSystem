import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Match
import { AddMatchComponent } from './match/add-match/add-match.component';
import { ListMatchComponent } from './match/list-match/list-match.component';
import { EditMatchComponent } from './match/edit-match/edit-match.component';
//Player
import { AddPlayerComponent } from './player/add-player/add-player.component';
import { ListPlayerComponent } from './player/list-player/list-player.component';
import { EditPlayerComponent } from './player/edit-player/edit-player.component';

const routes: Routes = [
  // pathMatch redirecting empty-path routes.
  //Matches
  { path: '', component: ListMatchComponent, pathMatch: 'full' },
  { path: 'list-match', component: ListMatchComponent },
  { path: 'add-match', component: AddMatchComponent },
  { path: 'edit-match', component: EditMatchComponent },
  // Players
  { path: '', component: ListPlayerComponent, pathMatch: 'full' },
  { path: 'list-player', component: ListPlayerComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player', component: EditPlayerComponent },
];

// Decorator makes the typescript class an angular module.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
