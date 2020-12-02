import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JobAppCategory } from "src/app/models/JobAppCategory";
import { JobApplication } from "src/app/models/JobApplication";
import { JobAppPositionType } from "src/app/models/JobAppPositionType";
import { JobApplicationService } from "../../../services/job-application.service";

@Component({
  selector: "app-edit-job-app",
  templateUrl: "./edit-job-app.component.html",
  styleUrls: ["./edit-job-app.component.css"],
})
export class EditJobAppComponent implements OnInit {
  jobApp = new JobApplication();
  msg;

  categories = JobAppCategory;
  PositionType = JobAppPositionType;

  constructor(private service: JobApplicationService, private router: Router) {}

  ngOnInit(): void {
    let response = this.service.getJobAppObject();
    response.subscribe(
      (data) => {
        this.msg = "jobApp object in edit component" + data;
        var realData = JSON.parse(data);
        console.log(data);
        console.log(realData);
        this.jobApp = realData;
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  onSubmit() {
    let response = this.service.updateJobApp(this.jobApp);

    response.subscribe(
      (data) => {
        this.msg = "Object has been created successfully" + data;
        var realData = JSON.parse(data);
        console.log(data);
        console.log(realData);

        this.router.navigate(["/interviewer/jobApp/view"]);
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }
}
