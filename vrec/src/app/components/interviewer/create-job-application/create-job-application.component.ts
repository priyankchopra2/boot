import { Component, OnInit } from "@angular/core";
import { JobApplication } from "../../../models/JobApplication";
import { JobAppCategory } from "../../../models/JobAppCategory";
import { JobAppPositionType } from "../../../models/JobAppPositionType";
import { JobApplicationService } from "../../../services/job-application.service";
import { InterviewerService } from "../../../services/interviewer.service";

@Component({
  selector: "app-create-job-application",
  templateUrl: "./create-job-application.component.html",
  styleUrls: ["./create-job-application.component.css"],
})
export class CreateJobApplicationComponent implements OnInit {
  jobApp = new JobApplication();

  categories = JobAppCategory;
  PositionType = JobAppPositionType;
  msg;
  interviewerId: number;

  constructor(
    private service: JobApplicationService,
    private IntService: InterviewerService
  ) {}

  ngOnInit(): void {
    this.IntService.getNameAndId.subscribe((data) => {
      this.interviewerId = Number.parseInt(data[1]);
      this.jobApp.interviewer.id = this.interviewerId;
    });
  }

  onSubmit() {
    let response = this.service.createJobApp(this.jobApp);

    response.subscribe(
      (data) => {
        this.msg = "Job Application has been created successfully ";

        var realData = JSON.parse(data);
        console.log(data);
        console.log(realData);

        // this.doLogin(); ->redirect to jobapp list
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }
}
