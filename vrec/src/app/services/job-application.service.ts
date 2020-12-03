import { Injectable } from "@angular/core";
import { JobApplication } from "../models/JobApplication";
import { HttpClient } from "@angular/common/http";
import { Jobprocess } from "../models/jobprocess";
@Injectable({
  providedIn: "root",
})
export class JobApplicationService {
  private editJobId;
  private candidateListJobId;
  private CandidateJobProcessId;
  private candidateListUpdate;
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

  public setCandidateListJobId(id) {
    this.candidateListJobId = id;
    console.log("From job app service id is :" + this.candidateListJobId);
  }

  public getJobAppCandidateList() {
    const url =
      "http://localhost:8080/jobApp/candidates/" + this.candidateListJobId;
    return this.http.get(url, { responseType: "text" as "json" });
  }

  public setCandidateJobProcessId(id) {
    this.CandidateJobProcessId = id;
    console.log("From job app service id is :" + this.CandidateJobProcessId);
  }

  public getCandidateProfile() {
    const url =
      "http://localhost:8080/jobApp//getCandidate/" +
      this.CandidateJobProcessId;
    return this.http.get(url, { responseType: "text" as "json" });
  }

  public updateCandidateProfile(jobProcess: Jobprocess) {
    const url = "http://localhost:8080/jobApp/update/candidateProfile";

    this.candidateListUpdate = true;
    return this.http.put(url, jobProcess, {
      responseType: "text" as "json",
    });
  }
}
