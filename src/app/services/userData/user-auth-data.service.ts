import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthDataService {

  username:string;
  token:string;
  isLoggedIn=false;
  constructor(private route:Router) { }

  setUsername = (username:string) => {
    this.username = username;
  }

  setToken = (token:string) => {
    this.token = token;
  }

  loginUser(){
    this.isLoggedIn = true;
  }

  logOutUser(){
    this.isLoggedIn = false;
    this.username='';
    this.token='';
    this.route.navigate(['login'])
  }
}
