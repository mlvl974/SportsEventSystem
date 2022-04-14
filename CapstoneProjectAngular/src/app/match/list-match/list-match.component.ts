import { Component, OnInit } from '@angular/core';
import { Match } from '../../model/match.model';
import { MatchService } from '../../service/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.css'],
})
export class ListMatchComponent implements OnInit {
  matches: Match[] = [];
  matchId: string = '';
  constructor(private matchService: MatchService, private router: Router) {}

  ngOnInit() {
    //subscribing to an obersrvable : oberservable Match[]
    this.matchService.getMatch().subscribe((data: Match[]) => {
      this.matches = data;
    });
  }

  addMatch(): void {
    this.router.navigate(['add-match']);
  }

  // delete the match from the database and remove it from the matchs[]

  // deleteMatch(match?: Match): void {
  //   this.matchService.deleteMatch(match!.id).subscribe((match) => {
  //     this.matches = this.matches.filter((matchItem) => matchItem !== match);
  //   });
  // }

  deleteMatch(match: Match): void {
    this.matchService.deleteMatch(match.id).subscribe((match) => {
      this.matches = this.matches.filter((match) => match !== match);
      alert('Match Deleted!');
      console.log('Data Deleted!');
      this.router.navigate(['list-match']);
    });
  }

  editMatch(match: Match): void {
    if (match.id.toString() != undefined) {
      this.matchId = match.id.toString();
    }
    localStorage.removeItem('editMatchId');
    localStorage.setItem('editMatchId', this.matchId);
    this.router.navigate(['edit-match']);
  }
}
