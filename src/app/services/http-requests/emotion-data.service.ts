import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmotionDataService {

  isError = false;
  isSuccess = false;
  isLoading = false;
 
  constructor(private http:HttpClient) { }

  /**
   * Fetch emotion data that will include past thirty days 
   * and past week.
   */
  getAllEmotionData(token){
    this.handleGetRequestSent();
    return this.http.get('http://intense-gorge-29567.herokuapp.com/Journal/last_week_moods/str',
    {headers: new HttpHeaders({ Authorization: `JWT ${token}`,'Content-Type': 'application/json'})})
  }


  handleGetRequestSent(){
    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;
  }

  handleGetRequestSuccess(){
    this.isError = false;
    this.isSuccess = true;
    this.isLoading = false;
  }

  handleGetRequestError(){
    this.isError = true;
    this.isSuccess = false;
    this.isLoading = false;
  }


}
