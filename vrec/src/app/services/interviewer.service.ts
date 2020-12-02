import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Interviewer} from '../models/Interviewer' 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

  private isInterviewerLoggedIn=new BehaviorSubject<boolean>(false);
  private nameAndId=new BehaviorSubject<string[]>(["",""]);


  currentVal = this.isInterviewerLoggedIn.asObservable();
  getNameAndId = this.nameAndId.asObservable();

  constructor(private http:HttpClient) { }

  public doLogin(interviewer:Interviewer){
    const url="http://localhost:8080/interviewer/login";
    
    return this.http.post(url,interviewer,{responseType:"text" as "json"});
  }


  changeLoginStatus(val: boolean,name,id) {
    this.isInterviewerLoggedIn.next(val);
    this.nameAndId.next([name,id]);
  }

}
