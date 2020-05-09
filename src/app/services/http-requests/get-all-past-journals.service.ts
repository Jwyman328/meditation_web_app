import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetAllPastJournalsService {
  constructor(private http: HttpClient) {}
  isError = false;
  isSuccess = false;
  isLoading = false;

  getAllPastJournals(token) {
    console.log(token, 'tok')
    this.handleGetRequestSent();
    return this.http.get(
      'https://intense-gorge-29567.herokuapp.com/Journal/all_user_entries',
      {
        headers: new HttpHeaders({
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  handleGetRequestSent() {
    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;
  }

  handleGetRequestSuccess() {
    this.isError = false;
    this.isSuccess = true;
    this.isLoading = false;
  }

  handleGetRequestError() {
    this.isError = true;
    this.isSuccess = false;
    this.isLoading = false;
  }
}
