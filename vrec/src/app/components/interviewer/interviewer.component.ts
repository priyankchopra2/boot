import { Component, OnInit } from '@angular/core';
import {Interviewer} from '../../..../../models/Interviewer';
import{NgForm}from '@angular/forms';
@Component({
  selector: 'app-interviewer-login',
  templateUrl: './interviewer-login.component.html',
  styleUrls: ['./interviewer-login.component.css']
})
export class InterviewerLoginComponent implements OnInit {
  constructor() {     }

  ngOnInit(): void {
  }

  interviewer = new Interviewer();
  msg='';
  submitted=false;

  onSubmit(){
    this.submitted=true;
    console.log(JSON.stringify(this.interviewer));
  }

  get diagnostic(){
    return JSON.stringify(this.interviewer);
  }
  
}
