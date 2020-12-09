import { Component, OnInit } from "@angular/core";
import { JobprocessService } from "../../../services/jobprocess.service";
import { Jobprocess } from "src/app/models/jobprocess";
import { JobApplication } from "src/app/models/JobApplication";
import { NgForm } from "@angular/forms";
import { RegisterService } from "../../../services/register.service";
import { User } from "../../../models/user";

import { Router } from "@angular/router";
@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.css"],
})
export class StatusComponent implements OnInit {
  //jobid:number;
  id: number;
  iid: number;
  job: Jobprocess;
  selected: string;
  jobapp: JobApplication;
  a: boolean;

  constructor(
    private _service: RegisterService,
    private router: Router,
    private jservice: JobprocessService
  ) {}
  msg = "";

  ngOnInit(): void {
    this.jservice.setmsg("");

    this._service.getid.subscribe((data: number) => {
      this.id = data;
    }); //<= Always get current value!

    this.jservice.jobstatus(this.id).subscribe(
      (data) => {
        console.log("response received");
        // this.jobprocess=data;
        if (data != null) {
          this.a = true;
          this.job = data;
          this.jservice.changejobprocess(this.job.jobid);
          this.iid = this.job.jobApplication.jid;

          this.check();
        } else {
          this.jservice.setmsg("you have not applied for  a job!!");
          this.router.navigate(["/userpage"]);
        }
      },
      (error) => {
        //  this._router.navigate(['/userpage'])
        console.log("exception occured");
        // this.msg="Bad credentials,please enter valid emailId and password";
      }
    );
  }

  //get job id
  // this.jobappjobapp=this.jservice.getjobapplication(this.iid);
  check() {
    console.log("***");
    if (this.a) {
      this.jservice.getjobapplication(this.iid).subscribe(
        (data) => {
          this.jobapp = data;
          console.log("response received" + data.category);

          if (this.job.selected) {
            console.log(this.job.currentround);
            console.log(this.jobapp.rounds);
            if (this.job.currentround == this.jobapp.rounds) {
              this.selected =
                "Congrats!!you are selected for the applied position!!";
            } else {
              this.selected = "Congrats!!you are selected for next round!!";
            }
          } else {
            if (this.job.currentround == 0)
              this.selected = "Waiting for interviews!";
            else this.selected = "Better luck next time!!";
          }
        },
        (error) => {
          console.log("exception occured");
        }
      );
    }
  }
}
