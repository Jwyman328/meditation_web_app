import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';

@Injectable({
  providedIn: 'root',
})
export class GetAllPastJournalsService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  getAllPastJournals(token:string) {
    this.handleRequestSent();
    return this.http.get(
      'http://localhost:3000/journals/past_week',
      {
        headers: new HttpHeaders({
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
