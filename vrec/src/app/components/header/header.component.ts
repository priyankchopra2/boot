import { Component, OnInit } from '@angular/core';
import {InterviewerService} from '../../services/interviewer.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isInterviewerLoggedIn;
  constructor(private service:InterviewerService) { }

  ngOnInit() {
    this.service.currentVal.subscribe((data:Boolean) =>{
      console.log(data);
      this.isInterviewerLoggedIn=data;
    })
  }

  logout(){
    this.service.changeLoginStatus(false,"","");
  }
}
