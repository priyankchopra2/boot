import { Component, OnInit } from "@angular/core";
import { JobprocessService } from "../../../services/jobprocess.service";
import { Jobprocess } from "src/app/models/jobprocess";
import { JobApplication } from "src/app/models/JobApplication";
import { NgForm } from "@angular/forms";
import { RegisterService } from "../../../services/register.service";
import { User } from "../../../models/user";

import { Router } from "@angular/router";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"],
})
export class UploadComponent implements OnInit {
  constructor(
    private _service: RegisterService,
    private router: Router,
    private jservice: JobprocessService
  ) {}
  // resume:File;
  jobid: number;
  id: number;
  file;

  jobprocess = new Jobprocess();
  ngOnInit(): void {
    //get job Id
    this.jservice.getjobid.subscribe((data: number) => {
      this.jobid = data;
    }); //<= Always get current value!

    //get user id
    this._service.getid.subscribe((data: number) => {
      this.id = data;
    }); //<= Always get current value!
    this.jobprocess.user.id = this.id;
    this.jobprocess.jobApplication.jid = this.jobid;
    /*
//get user object
  this._service.viewprofile(this.id).subscribe(
    data => {
      this.jobprocess.user=data;
 console.log("response received"+data.username)
},
    error => {
      console.log("exception occured");
    }
  )

  //get jobapp id
  this.jservice.getjobapplication(this.jobid).subscribe(
    data => {
      this.jobprocess.jobid=data;
 console.log("response received"+data.category)
},
    error => {
      console.log("exception occured");
    }
  )*/
  }
  apply() {
    console.log("********************************");
    console.log(document.getElementById("input").files[0]);
    // this.file = document.getElementById("input").files[0].__proto__;

    var formData = new FormData();
    // formData.append("file", document.getElementById("input").files[0]);

    // formData.append(
    //   "properties",
    //   new Blob(
    //     [
    //       JSON.stringify({
    //         name: "root",
    //         password: "root",
    //       }),
    //     ],
    //     {
    //       type: "application/json",
    //     }
    //   )
    // );

    // this.jobprocess.resume = document.getElementById(
    //   "input"
    // ).files[0].__proto__;

    // this.jobprocess.resume=this.resume;
    let res = this.jservice.upload(this.jobprocess, formData);
    res.subscribe(
      (data) => {
        console.log("response received" + data);
      },
      (error) => {
        console.log("exception occured" + console.error());
      }
    );
    
  }
}
