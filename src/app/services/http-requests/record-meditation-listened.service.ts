import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';
import { getBaseUrl } from '../../helpers/helpers';

@Injectable({
  providedIn: 'root',
})
export class RecordMeditationListenedService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  baseURL = getBaseUrl();

  recordMeditationListened(meditaitonListenedData: any, token: string) {
    this.handleRequestSent();
    return this.http.post(
      `${this.baseURL}/meditation-sessions/`,
      meditaitonListenedData,
      {
        headers: new HttpHeaders({
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
