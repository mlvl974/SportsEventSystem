import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../service/match.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css'],
})
export class EditMatchComponent implements OnInit {
  // label
  matchformlabel: string = 'Edit Match';
  // btn name
  matchformbtn: string = 'Update';

  times = ['01:00 AM', '03:00 AM', '05:00 AM'];

  addForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      TeamA: ['', Validators.required],
      TeamAURL: ['', Validators.required],
      Time: ['', Validators.required],
      TeamB: ['', Validators.required],
      TeamBURL: ['', Validators.required],
      Date: ['', Validators.required],
      Location: ['', Validators.required],
      time: ['01:00 AM', Validators.required],
    });

    // getting the match to edit from the web api.
    let editMatchId = localStorage.getItem('editMatchId');
    alert(editMatchId);
    if (+editMatchId! > 0) {
      this.matchService
        .getMatchById(+editMatchId!)
        .subscribe((match) => this.addForm.patchValue(match));
    }
  }

  onUpdate() {
    console.log('Match updates sent to the server!');
    console.log(this.addForm?.value);
    this.matchService.updateMatch(this.addForm?.value).subscribe(
      (data) => {
        alert('Match updated!');
        console.log('Data sent to the web api and database!');
        this.router.navigate(['list-match']);
      }
      // error => {
      //   alert(error);
      // }
    );
  }
}
