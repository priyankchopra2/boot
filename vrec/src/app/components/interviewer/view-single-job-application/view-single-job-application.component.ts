import { Component, OnInit } from "@angular/core";
import { JobApplication } from "src/app/models/JobApplication";
import { InterviewerService } from "../../../services/interviewer.service";
import { JobApplicationService } from "../../../services/job-application.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-single-job-application",
  templateUrl: "./view-single-job-application.component.html",
  styleUrls: ["./view-single-job-application.component.css"],
})
export class ViewSingleJobApplicationComponent implements OnInit {
  interviewerName;
  interviewerId;
  msg;
  jobApps = [];

  constructor(
    private service: JobApplicationService,
    private IntService: InterviewerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.IntService.getNameAndId.subscribe((data) => {
      this.interviewerName = data[0];
      this.interviewerId = data[1];
    });

    this.loadApps(this.interviewerId);
  }

  public loadApps(id) {
    let response = this.service.getInterviewerJobApp(id);

    response.subscribe(
      (data) => {
        this.msg = "Object has been created successfully" + data;
        var realData = JSON.parse(data);
        console.log(data);
        console.log(realData);

        this.jobApps = realData;

        // this.doLogin(); ->redirect to jobapp list
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  public editJobApp(id) {
    this.service.setEditId(id);
    this.router.navigate(["/interviewer/jobApp/edit"]);
  }

  deleteJobApp(id) {
    let response = this.service.deleteJobApp(id);
    response.subscribe(
      (data) => {
        console.log(data);

        this.loadApps(this.interviewerId);
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  viewCandiates(id) {
    this.service.setCandidateListJobId(id);
    this.router.navigate(["/interviewer/jobApp/view/candidates"]);
  }
}
