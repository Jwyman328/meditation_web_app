import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMeditationsService  extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  getMeditationListened(token: string):any {
    this.handleRequestSent();
    return this.http.get(
      'https://morning-sierra-84400.herokuapp.com/meditation-sessions/',{
        headers: new HttpHeaders({
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        }),
      }
    );
  }

}