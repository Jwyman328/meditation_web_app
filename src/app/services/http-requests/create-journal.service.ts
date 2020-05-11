import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createJournalPostModel } from '../../models/journalModels/createJournalPostModel';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';

@Injectable({
  providedIn: 'root'
})
export class CreateJournalService extends RequestSentStatus {


  constructor(private http:HttpClient) {
    super();
   }

  createJournal = (journalData:createJournalPostModel, token) => {
    this.handleRequestSent();
    return this.http.post(`https://intense-gorge-29567.herokuapp.com/Journal/all_user_entries`,journalData,
    {headers: new HttpHeaders({ Authorization: `JWT ${token}`,'Content-Type': 'application/json'}) })
  }

}
