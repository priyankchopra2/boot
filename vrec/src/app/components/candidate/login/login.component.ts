

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
 
  
   
     this._router.navigate(['/userpage'])
   
 }
 gotoregistration(){
  this._router.navigate(['/registration'])
 }
}
