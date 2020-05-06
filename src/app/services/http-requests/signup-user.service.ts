import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signUpDataModel } from '../../models/http-responses/signUpDataModel';

@Injectable({
  providedIn: 'root'
})
export class SignupUserService {

  constructor(private http: HttpClient) {}

  isError=false;
  isSuccess=false;
  isLoading=false;

  postSignUpUser(signUpData:signUpDataModel) {
    this.handleSignUpRequestSent();
    return this.http.post(
      'http://intense-gorge-29567.herokuapp.com/sign_up',
      signUpData,{headers: new HttpHeaders({ 'Content-Type': 'application/json'})}
    );
  }

  handleSignUpRequestSent(){
    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;
  }

  handleSignUpRequestSuccess(){
    this.isError = false;
    this.isSuccess = true;
    this.isLoading = false;
  }

  handleSignUpRequestError(){
    this.isError = true;
    this.isSuccess = false;
    this.isLoading = false;
  }
}
