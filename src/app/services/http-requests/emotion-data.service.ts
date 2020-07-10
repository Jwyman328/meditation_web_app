import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestSentStatus } from './RequestSentStatusHandler/RequestSentStatusHandler';

@Injectable({
  providedIn: 'root'
})
export class EmotionDataService extends RequestSentStatus {

  constructor(private http:HttpClient) {
    super();
   }

  /**
   * Fetch emotion data that will include past thirty days 
   * and past week.
   */
  getAllEmotionData(token:string){
    this.handleRequestSent();
    return this.http.get('http://localhost:3000/moods/past_month', //'https://intense-gorge-29567.herokuapp.com/Journal/last_week_moods/str'
    {headers: new HttpHeaders({ Authorization: `JWT ${token}`,'Content-Type': 'application/json'})})
  }

  getWeekEmotionData(token:string){
    this.handleRequestSent();
    return this.http.get('http://localhost:3000/moods/past_week', //'https://intense-gorge-29567.herokuapp.com/Journal/last_week_moods/str'
    {headers: new HttpHeaders({ Authorization: `JWT ${token}`,'Content-Type': 'application/json'})})
  }


}
