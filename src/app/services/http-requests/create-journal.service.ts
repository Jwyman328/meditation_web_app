import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createJournalPostModel } from '../../models/journalModels/createJournalPostModel';

@Injectable({
  providedIn: 'root'
})
export class CreateJournalService {

  isError = false;
  isSuccess = false;
  isLoading = false;
  constructor(private http:HttpClient) { }

  createJournal = (journalData:createJournalPostModel, token) => {
    this.handlePostSent();
    return this.http.post(`https://intense-gorge-29567.herokuapp.com/Journal/all_user_entries`,journalData,
    {headers: new HttpHeaders({ Authorization: `JWT ${token}`,'Content-Type': 'application/json'}) })
  }

  handlePostSent(){
    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;
  }

  handlePostSuccess(){
    this.isError = false;
    this.isSuccess = true;
    this.isLoading = false;
  }

  handlePostError(){
    this.isError = true;
    this.isSuccess = false;
    this.isLoading = false;
  }
}
