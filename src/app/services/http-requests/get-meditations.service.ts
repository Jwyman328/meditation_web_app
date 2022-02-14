import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';
import { Observable } from 'rxjs';
import { getBaseUrl } from '../../helpers/helpers';

@Injectable({
  providedIn: 'root',
})
export class GetMeditationsService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  baseURL = getBaseUrl();

  getMeditationListened(token: string): any {
    this.handleRequestSent();
    return this.http.get(`${this.baseURL}/meditation-sessions/`, {
      headers: new HttpHeaders({
        Authorization: `JWT ${token}`,
        'Content-Type': 'application/json',
      }),
    });
  }
}
