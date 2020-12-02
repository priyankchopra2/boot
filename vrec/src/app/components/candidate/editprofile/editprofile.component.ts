import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
 
  msg='';
  id:number;
  constructor(  private _service : RegisterService,
    private router: Router,
  ) { }
  user=new User();
  ngOnInit(): void {
    this._service.getid.subscribe((data:number)=>{
      this.id=data;
    }); //<= Always get current value!

    this._service.viewprofile(this.id).subscribe(
      data => {
   console.log("response received"+data.username)
   this.user=data;
  },
      error => {
      //  this._router.navigate(['/userpage'])
        console.log("exception occured");
       // this.msg="Bad credentials,please enter valid emailId and password";
      }
    )
  }
  
 // user=this._service.getUser();
  update(){
    this._service.update(this.user).subscribe(
      data =>{
        console.log("response received");
        alert("Your Profile Updated Successfully.");
     
       // this.router.navigate(['/candidate/login'])
      },
      error =>{
        console.log("exception occured");
        this.msg="enter valid details!";
      }
    )
  }

}
