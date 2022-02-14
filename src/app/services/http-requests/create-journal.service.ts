import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createJournalPostModel } from '../../models/journalModels/createJournalPostModel';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';
import { getBaseUrl } from '../../helpers/helpers';

@Injectable({
  providedIn: 'root',
})
export class CreateJournalService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  baseURL = getBaseUrl();

  createJournal = (journalData: createJournalPostModel, token: string) => {
    this.handleRequestSent();
    return this.http.post(
      `${this.baseURL}/Journals/`, //${this.baseURL}/Journals/ //https://intense-gorge-29567.herokuapp.com
      journalData,
      {
        headers: new HttpHeaders({
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        }),
      }
    );
  };
}
