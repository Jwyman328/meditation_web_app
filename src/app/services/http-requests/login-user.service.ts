import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginPostDataModel } from 'src/app/models/http-responses/loginPostDataModel';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';

@Injectable({
  providedIn: 'root',
})
export class LoginUserService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  postLoginUser(loginData:loginPostDataModel) {
    this.handleRequestSent();
    return this.http.post(
     `http://localhost:3000/auth/login`,
      loginData,{headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
    );
  }


}
