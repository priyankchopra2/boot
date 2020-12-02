import { Component, OnInit } from "@angular/core";
import { JobprocessService } from "../../../services/jobprocess.service";
import { Jobprocess } from "src/app/models/jobprocess";
import { Router } from "@angular/router";
import { User } from "../../../models/user";
import { RegisterService } from "../../../services/register.service";

@Component({
  selector: "app-joblist",
  templateUrl: "./joblist.component.html",
  styleUrls: ["./joblist.component.css"],
})
export class JoblistComponent implements OnInit {
  id: number;
  user = new User();
  jobprocess = new Jobprocess();
  jobapp: any[];

  constructor(
    private router: Router,
    private service: RegisterService,
    private jservice: JobprocessService
  ) {}

  ngOnInit(): void {
    this.service.getid.subscribe((data: number) => {
      this.id = data;
    }); //<= Always get current value!

    this.jservice.checkjoblist(this.id).subscribe(
      (data) => {
        console.log("response received");
        // this.jobprocess=data;
        if (data != null) {
          this.jobapp = data;
        }
      },
      (error) => {
        //  this._router.navigate(['/userpage'])
        console.log("exception occured");
        // this.msg="Bad credentials,please enter valid emailId and password";
      }
    );
  }

  apply(jid: any) {
    this.jservice.changejobapply(jid);
    console.log(jid);
    this.router.navigate(["/upload"]);
  }
}
