import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Jobprocess } from "../models/jobprocess";

@Injectable({
  providedIn: "root",
})
export class JobprocessService {
  constructor(private _http: HttpClient) {}

  private jid = new BehaviorSubject<number>(0);
  getjid = this.jid.asObservable();

  private jobid = new BehaviorSubject<number>(0);
  getjobid = this.jobid.asObservable();

  private msg = new BehaviorSubject<String>("");
  getmsg = this.msg.asObservable();

  public checkjoblist(id: number): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/jobprocess/joblist/" + id
    );
  }

  public getjobapplication(jobid: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/jobApp/get/jid/" + jobid);
  }
  public getjobapplicationn(jobid: number) {
    return this._http.get("http://localhost:8080/jobApp/get/" + jobid);
  }

  public upload(jobprocess: Jobprocess): Observable<any> {
    return this._http.post<any>(
      "http://localhost:8080/jobprocess/applyjob",
      jobprocess
    );
  }

  public jobstatus(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/jobprocess/status/" + id);
  }

  changejobapply(jobid: number) {
    this.jobid.next(jobid);
    console.log(this.getjobid + "????");
  }

  changejobprocess(jid: number) {
    this.jid.next(jid);
    console.log(this.getjid + "????");
  }
  setmsg(msg: String) {
    this.msg.next(msg);
    console.log(this.getmsg + "????");
  }
}
