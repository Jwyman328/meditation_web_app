import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthDataService {

  username:string;
  token:string;
  constructor() { }

  setUsername = (username:string) => {
    this.username = username;
  }

  setToken = (token:string) => {
    this.token = token;
  }
}
