import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmotionDataService {

  isError = false;
  isSuccess = false;
  isLoading = false;
  pastMonthData:number[];
  pastWeekData: number[];
  today:string;
  dateAWeekAgo: string;
  dateAMonthAgo:string;
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

  setPastMonthEmotionData(pastMonthData){
    
    this.pastMonthData = this.createGraphDataFromRaw(pastMonthData);
  }
  setPastWeekEmotionData(pastWeekData){
    this.pastWeekData = this.createGraphDataFromRaw(pastWeekData)
  }

  setDateValues(dateArray:string[]){
    this.today = dateArray[0];
    this.dateAWeekAgo= dateArray[1];
    this.dateAMonthAgo = dateArray[2];
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

  createGraphDataFromRaw(rawDataArray){
    let count = -1
    let graphFormat = rawDataArray.map((moodPoint) => {
      count = count + 1;
      return {x:count,y:moodPoint, info:''}
    })
    console.log(graphFormat, 'md')
    return graphFormat
  }
}
