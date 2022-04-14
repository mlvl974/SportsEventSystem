import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player.model';
import { PlayerService } from '../../service/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css'],
})
export class ListPlayerComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit() {
    //subscribing to an obersrvable : oberservable Player[]
    this.playerService.getPlayer().subscribe((data: Player[]) => {
      this.players = data;
    });
  }

  deletePlayer(player: Player): void {
    this.playerService.deletePlayer(player.id).subscribe((data) => {
      this.players = this.players.filter((player) => player !== player);
    });
  }

  editPlayer(player: Player): void {
    localStorage.removeItem('editPlayerId');
    localStorage.setItem('editPlayerId', player.id.toString());
    this.router.navigate(['edit-player']);
  }

  addPlayer(): void {
    this.router.navigate(['add-player']);
  }
}
