import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginPostDataModel } from 'src/app/models/http-responses/loginPostDataModel';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';
import { getBaseUrl } from '../../helpers/helpers';

@Injectable({
  providedIn: 'root',
})
export class LoginUserService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  baseURL = getBaseUrl();

  postLoginUser(loginData: loginPostDataModel) {
    this.handleRequestSent();
    return this.http.post(`${this.baseURL}/auth/login`, loginData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
