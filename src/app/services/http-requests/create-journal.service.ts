import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createJournalPostModel } from '../../models/journalModels/createJournalPostModel';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';

@Injectable({
  providedIn: 'root',
})
export class CreateJournalService extends RequestSentStatus {
  constructor(private http: HttpClient) {
    super();
  }

  createJournal = (journalData: createJournalPostModel, token: string) => {
    this.handleRequestSent();
    return this.http.post(
      `https://morning-sierra-84400.herokuapp.com/Journals/`,//http://localhost:3000/Journals/ //https://intense-gorge-29567.herokuapp.com 
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
