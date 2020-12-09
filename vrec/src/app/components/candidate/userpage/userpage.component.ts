import { Component, OnInit } from '@angular/core';
import { JobprocessService } from '../../../services/jobprocess.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

   msg:String='';
   constructor(private jservice:JobprocessService
  ) { }
  ngOnInit(): void {
    this.jservice.getmsg.subscribe((data:String)=>{
      this.msg=data;
    }); //<= Always get current value!

  }

}
