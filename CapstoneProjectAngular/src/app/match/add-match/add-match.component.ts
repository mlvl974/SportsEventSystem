import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../service/match.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent implements OnInit {
  matchformlabel: string = 'Add Match';

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
  }

  onSubmit() {
    console.log('Match details sent to server!');
    console.log(this.addForm?.value);
    this.matchService.createMatch(this.addForm?.value).subscribe((data) => {
      alert('Match added!');
      console.log('Data sent to the web api and database!');
      this.router.navigate(['list-match']);
    });
  }
}
