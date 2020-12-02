import { Component, OnInit } from '@angular/core';
import {InterviewerService} from '../../../services/interviewer.service';
@Component({
  selector: 'app-interviewer-dashboard',
  templateUrl: './interviewer-dashboard.component.html',
  styleUrls: ['./interviewer-dashboard.component.css']
})
export class InterviewerDashboardComponent implements OnInit {

  interviewerName;
  interviewerId;

  constructor(private service:InterviewerService) { }

  ngOnInit(): void {
    this.service.getNameAndId.subscribe(data=>{
      this.interviewerName=data[0];
      this.interviewerId=data[1];
    })
  }

}
