import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';
import { getBaseUrl } from '../../helpers/helpers';

@Injectable({
  providedIn: 'root',
})
export class GetAllPastJournalsService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  baseURL = getBaseUrl();

  getAllPastJournals(token: string) {
    this.handleRequestSent();
    return this.http.get(`${this.baseURL}/journals/past_week`, {
      headers: new HttpHeaders({
        Authorization: `JWT ${token}`,
        'Content-Type': 'application/json',
      }),
    });
  }
}
