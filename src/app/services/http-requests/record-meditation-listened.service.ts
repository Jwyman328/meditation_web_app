import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';

@Injectable({
  providedIn: 'root'
})
export class RecordMeditationListenedService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  recordMeditationListened(meditaitonListenedData:any,token: string) {
    this.handleRequestSent();
    return this.http.post(
      'http://localhost:3000/meditation/record-session-listened',
      meditaitonListenedData,{headers: new HttpHeaders({
        Authorization: `JWT ${token}`,
        'Content-Type': 'application/json',
      })}
    );
  }

}
