import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { RegisterService } from '../../../services/register.service';

import { JobprocessService } from '../../../services/jobprocess.service';
import { Jobprocess } from 'src/app/models/jobprocess';
import { JobApplication } from 'src/app/models/JobApplication';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  id:number;
  user=new User();
  jobprocess=new Jobprocess();
  jobapp:any[];
  msg='';
  constructor(  private _service : RegisterService,
    private router: Router,private jservice:JobprocessService
  ) { }

  ngOnInit(): void {
    
    this.jservice.setmsg("");

    this._service.getid.subscribe((data:number)=>{
      this.id=data;
    }); //<= Always get current value!

    this.jservice.checkjoblist(this.id).subscribe(
      data => {
   console.log("response received")
  // this.jobprocess=data;
   if(data!=null)
   {
this.jobapp=data;
   }
   else{
     this.jservice.setmsg("you have already applied for a job!!!");
     this.router.navigate(['/userpage']);
   }
  },
      error => {
      //  this._router.navigate(['/userpage'])
        console.log("exception occured");
       // this.msg="Bad credentials,please enter valid emailId and password";
      }
    )

  }


  apply(jid:any)
  {
    this.jservice.changejobapply(jid);
    console.log(jid);
    this.router.navigate(['/upload'])
  }

}
