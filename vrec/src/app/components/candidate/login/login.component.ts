

import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';
import { User } from '../../../models/user';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class CandidateloginComponent implements OnInit {
 user=new User();
 msg='';
  constructor(private _service : RegisterService,private _router :Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
   console.log("response received")
   
   this.user=data;
  //var readData=JSON.parse(data);
   this._service.changeuser(this.user.id);
   console.log(this.user.id);
 //  console.log(readData.id);
  // this._service.setUserId(this.user.id);
   this._router.navigate(['/userpage'])
   },
      error => {
        console.log("exception occured");
        this.msg="Bad credentials,please enter valid emailId and password";
      }
    )
  }
 
}
