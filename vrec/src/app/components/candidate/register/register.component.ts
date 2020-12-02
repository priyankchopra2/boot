

import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { RegisterService } from '../../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class CandidateregisterComponent implements OnInit {
  user=new User();
  msg='';
  constructor(  private _service : RegisterService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log("aaaa");
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        alert("User created successfully.");
        this.router.navigate(['/candidate/login'])
      },
      error =>{
        console.log("exception occured");
        this.msg="user exits!!enter valid id";
      }
    )
  }
}