

import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';
import { User } from '../../../models/user';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';
import { JobprocessService } from '../../../services/jobprocess.service';
import { Jobprocess } from 'src/app/models/jobprocess';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class CandidateloginComponent implements OnInit {
 user=new User();
 msg='';
  constructor(private _service : RegisterService,private _router :Router,private jservice:JobprocessService) { }
job=new Jobprocess;
  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
   console.log("response received")
   //get user id
   this.user=data;
   this._service.changeuser(this.user.id);
   console.log(this.user.id);
   //check for jobapplied id}
   this.jservice.setmsg("Welcome "+this.user.username+"  !!!");
   this._router.navigate(['/userpage'])
 
   

 // this.checkkk();

 //  console.log(readData.id);
  // this._service.setUserId(this.user.id);
   },
      error => {
        console.log("exception occured");
        this.msg="Bad credentials,please enter valid emailId and password";
      }
    )
  }
 
}
