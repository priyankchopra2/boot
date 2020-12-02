import { Component, OnInit } from "@angular/core";
import { Interviewer } from "../../../models/Interviewer";
import { InterviewerService } from "../../../services/interviewer.service";
import { Router } from "@angular/router";
import { stringify } from "querystring";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  interviewer = new Interviewer();
  msg: any;
  result: any;
  isInterviewerLoggedIn;

  constructor(private service: InterviewerService, private router: Router) {}

  ngOnInit() {
    this.service.currentVal.subscribe((data: Boolean) => {
      console.log(data);
      this.isInterviewerLoggedIn = data;
    });
  }

  doLogin() {
    console.log("in do login");
    if (this.isInterviewerLoggedIn) {
      this.router.navigate(["/interviewer"]);
    }
  }

  public onSubmit() {
    let response = this.service.doLogin(this.interviewer);
    console.log("response: " + response.toPromise);
    response.subscribe(
      (data) => {
        this.msg = data;
        this.result = [];

        var realData = JSON.parse(data);
        console.log(data);
        for (let key in realData) {
          this.result.push(realData[key]);
        }
        console.log(this.result);
        this.service.changeLoginStatus(true, realData.name, realData.id);
        this.doLogin();
      },
      (error) => {
        // console.log("ye status h : "+error.status);
        if (error.status == 406) {
          this.msg = "password is incorrect";
        } else if (error.status == 404) {
          this.msg = "email is incorrect";
        }
        console.log(JSON.stringify(error));
      }
    );
  }
}

// import { Component, OnInit } from '@angular/core';
// import {Interviewer} from '../../../models/Interviewer';
// import{NgForm}from '@angular/forms';
// @Component({
//   selector: 'app-interviewer-login',
//   templateUrl: './interviewer-login.component.html',
//   styleUrls: ['./interviewer-login.component.css']
// })
// export class InterviewerLoginComponent implements OnInit {
//   constructor() {     }

//   ngOnInit(): void {
//   }

//   interviewer = new Interviewer();
//   msg='';
//   submitted=false;

//   onSubmit(){
//     this.submitted=true;
//     console.log(JSON.stringify(this.interviewer));
//   }

//   get diagnostic(){
//     return JSON.stringify(this.interviewer);
//   }

// }
