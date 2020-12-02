import { Injectable } from "@angular/core";
import { JobApplication } from "../models/JobApplication";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class JobApplicationService {
  private editJobId;
  constructor(private http: HttpClient) {}

  public createJobApp(jobApp: JobApplication) {
    const url = "http://localhost:8080/jobApp/create";
    return this.http.post(url, jobApp, { responseType: "text" as "json" });
  }

  //getting job app based obn interviewer id
  public getInterviewerJobApp(id) {
    const url = "http://localhost:8080/jobApp/get/" + id;
    return this.http.get(url, { responseType: "text" as "json" });
  }

  //getting all job applications
  public getAllJobApps() {
    const url = "http://localhost:8080/jobApp/getAll";
    return this.http.get(url, { responseType: "text" as "json" });
  }

  public setEditId(id) {
    this.editJobId = id;
    console.log("From service id is :" + this.editJobId);
  }

  //getting object to edit that
  public getJobAppObject() {
    const url = "http://localhost:8080/jobApp/get/jid/" + this.editJobId;
    return this.http.get(url, { responseType: "text" as "json" });
  }

  public updateJobApp(jobApp: JobApplication) {
    const url = "http://localhost:8080/jobApp/update";
    return this.http.put(url, jobApp, { responseType: "text" as "json" });
  }

  public deleteJobApp(id) {
    console.log("deleting...");
    const url = "http://localhost:8080/jobApp/delete/" + id;
    return this.http.delete(url, { responseType: "text" as "json" });
  }
}
