import { Injectable } from "@angular/core";
import { User } from "../models/user";

import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  private id = new BehaviorSubject<number>(0);
  getid = this.id.asObservable();
  obj: any;
  //  id:number;
  // id=new BehaviorSubject<"number">(0);
  constructor(private _http: HttpClient) {}
  public loginUserFromRemote(userobj: User): Observable<any> {
    return this._http.post<any>(
      "http://localhost:8080/candidate/login",
      userobj
    );
  }
  public registerUserFromRemote(userobj: User): Observable<any> {
    return this._http.post<any>(
      "http://localhost:8080/candidate/registeruser",
      userobj
    );
  }
  public viewprofile(id: number): Observable<any> {
    console.log("**************" + id);

    return this._http.get<any>("http://localhost:8080/candidate/get/" + id);
  }
  public update(user: User): Observable<any> {
    return this._http.put<any>("http://localhost:8080/candidate/update", user);
  }
  //  currentuser = this.messageSource.asObservable();
  changeuser(id: number) {
    this.id.next(id);
    console.log(this.getid + "????");
  }
}
