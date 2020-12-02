import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  id:number;
  constructor(private _service : RegisterService,private _router :Router) { }
user=new User();
  ngOnInit(): void {
    this._service.getid.subscribe((data:number)=>{
      this.id=data;
    }); //<= Always get current value!

    this._service.viewprofile(this.id).subscribe(
      data => {
   console.log("response received"+data.username)
   this.user=data;
  // this.user=data;
   //this._service.setUserId(this.user.id);
   //this._router.navigate(['/userpage'])
   },
      error => {
      //  this._router.navigate(['/userpage'])
        console.log("exception occured");
       // this.msg="Bad credentials,please enter valid emailId and password";
      }
    )
  }
 
}
