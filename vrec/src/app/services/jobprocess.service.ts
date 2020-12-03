import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  public checkjoblist(id: number): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/jobprocess/joblist/" + id
    );
  }

  public getjobapplication(jobid: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/jobApp/get/" + jobid);
  }

  public upload(jobprocess: Jobprocess, formData: FormData) {
    var req = {
      url: "http://localhost:8080/jobprocess/applyjob",
      method: "POST",
      headers: { "Content-Type": undefined },
      data: jobprocess,
      formData,
      transformRequest: function (data, headersGetterFunction) {
        return data;
      },
    };

    return this._http.post(
      "http://localhost:8080/jobprocess/applyjob",

      jobprocess
    );
  }

  public changejobapply(jobid: number) {
    this.jobid.next(jobid);
    console.log(this.getjobid + "????");
  }

  changejobprocess(jid: number) {
    this.jid.next(jid);
    console.log(this.getjid + "????");
  }
}
