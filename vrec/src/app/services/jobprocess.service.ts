import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable}from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Jobprocess } from '../models/jobprocess';

@Injectable({
  providedIn: 'root'
})
export class JobprocessService {

  constructor(private _http: HttpClient) { }
 
  private jid= new  BehaviorSubject<number>(0);
 getjid=this.jid.asObservable();


 private jobid= new  BehaviorSubject<number>(0);
 getjobid=this.jobid.asObservable();


public checkjoblist (id:number):Observable<any>{
  
  
     return this._http.get<any>("http://localhost:9999/jobprocess/joblist/"+id);
    
    }

    public getjobapplication(jobid:number):Observable<any>
    {
      return this._http.get<any>("http://localhost:9999/jobApp/get/"+jobid);
  
    }

    public upload(jobprocess:Jobprocess):Observable<any> {
     
      return this._http.post<any>("http://localhost:9999/jobprocess/applyjob",jobprocess);
       
  }




    changejobapply(jobid: number) {
      this.jobid.next(jobid);
      console.log(this.getjobid+"????");
      }
    
 changejobprocess(jid: number) {
  this.jid.next(jid);
  console.log(this.getjid+"????");
  }
}
