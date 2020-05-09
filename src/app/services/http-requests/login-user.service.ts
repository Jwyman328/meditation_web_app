import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginPostDataModel } from 'src/app/models/http-responses/loginPostDataModel';

@Injectable({
  providedIn: 'root',
})
export class LoginUserService {
  constructor(private http: HttpClient) {}

  isError=false;
  isSuccess=false;
  isLoading=false;

  postLoginUser(loginData:loginPostDataModel) {
    this.handleLoginRequestSent();
    return this.http.post(
      'https://intense-gorge-29567.herokuapp.com/sign_in',
      loginData,{headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
    );
  }

  handleLoginRequestSent(){
    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;
  }

  handleLoginRequestSuccess(){
    this.isError = false;
    this.isSuccess = true;
    this.isLoading = false;
  }

  handleLoginRequestError(){
    this.isError = true;
    this.isSuccess = false;
    this.isLoading = false;
  }

}
