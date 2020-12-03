import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Jobprocess } from "src/app/models/jobprocess";

import { JobApplicationService } from "src/app/services/job-application.service";

@Component({
  selector: "app-view-candidate-profile",
  templateUrl: "./view-candidate-profile.component.html",
  styleUrls: ["./view-candidate-profile.component.css"],
})
export class ViewCandidateProfileComponent implements OnInit {
  candidateDetails = new Jobprocess();
  msg = "";

  constructor(private service: JobApplicationService, private router: Router) {}

  ngOnInit(): void {
    this.service.getCandidateProfile().subscribe(
      (data) => {
        var realData = JSON.parse(data);
        console.log(data);
        console.log(realData);

        this.candidateDetails = realData;

        // this.doLogin(); ->redirect to jobapp list
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  updateCandidateProfile() {
    let res = this.service.updateCandidateProfile(this.candidateDetails);
    res.subscribe((data) => {
      console.log(data);
      this.msg = `profile has been updated`;
    });
    // this.router.navigate(["/interviewer/jobApp/view/candidates"]);
  }
}
