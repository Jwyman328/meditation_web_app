import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signUpDataModel } from '../../models/http-responses/signUpDataModel';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';

@Injectable({
  providedIn: 'root',
})
export class SignupUserService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }


  postSignUpUser(signUpData: signUpDataModel) {
    this.handleRequestSent();
    return this.http.post(
      `http://localhost:3000/auth/sign_up`,
      signUpData,
      
    );
  }
}
//{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }