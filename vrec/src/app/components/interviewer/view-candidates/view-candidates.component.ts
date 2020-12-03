import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JobApplicationService } from "src/app/services/job-application.service";

@Component({
  selector: "app-view-candidates",
  templateUrl: "./view-candidates.component.html",
  styleUrls: ["./view-candidates.component.css"],
})
export class ViewCandidatesComponent implements OnInit {
  candidateList = [];

  constructor(private service: JobApplicationService, private router: Router) {}

  ngOnInit(): void {
    this.service.getJobAppCandidateList().subscribe(
      (data) => {
        var realData = JSON.parse(data);
        console.log(data);
        console.log(realData);

        this.candidateList = realData;

        // this.doLogin(); ->redirect to jobapp list
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  viewCandidateProfile(id) {
    this.service.setCandidateJobProcessId(id);
    this.router.navigate(["/interviewer/jobApp/view/candidateProfile"]);
  }
}
