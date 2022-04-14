import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
})
export class EditPlayerComponent implements OnInit {
  // label
  playerformlabel: string = 'Edit Player';
  // btn name
  playerformbtn: string = 'Update';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private playerService: PlayerService
  ) {}

  addForm!: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      TeamName: ['', Validators.required],
      FullName: ['', [Validators.required]],
      JerseyNumber: ['', [Validators.required]],
      FieldPosition: ['', [Validators.required]],
    });

    let playerid = localStorage.getItem('editPlayerId');
    if (+playerid! > 0) {
      this.playerService.getPlayerById(+playerid!).subscribe((players) => {
        this.addForm.patchValue(players);
      });
    }
  }

  onUpdate() {
    console.log('Updating Player.');
    this.playerService.updatePlayer(this.addForm.value).subscribe(
      (players) => {
        alert('Player updated');
        this.router.navigate(['list-player']);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
