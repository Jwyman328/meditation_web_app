import { Component, OnInit } from '@angular/core';
import { EmotionDataService } from '../../services/http-requests/emotion-data.service';
import { UserAuthDataService } from '../../services/userData/user-auth-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mental-health-show-data',
  templateUrl: './mental-health-show-data.component.html',
  styleUrls: ['./mental-health-show-data.component.scss'],
})
export class MentalHealthShowDataComponent implements OnInit {
  monthData=[] ;
  weekData=[];
  graphData=this.monthData;
  currentGraph='month';
  today = new Date()
  dateOneMonthAgo:any = new Date( new Date().setMonth(this.today.getMonth() - 1));
  dateOneWeekAgo:any = new Date( new Date().setDate(this.today.getDate() -7));
  graphTitle= `My Emotions: ${this.dateOneWeekAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`

  backgroundImageUrl =
    'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
  constructor(
    private emotionDataService: EmotionDataService,
    private userAuthDataService: UserAuthDataService,
    private route:Router
  ) {}

  ngOnInit(): void {
    //makae a request and get the data to display
      this.emotionDataService
      .getAllEmotionData(this.userAuthDataService.token)
      .subscribe(
        (emotionDataResponse) => {
          console.log(emotionDataResponse, 'dr');
          this.emotionDataService.setPastMonthEmotionData(
            emotionDataResponse[0]['moods_range'][1]
          );
          this.monthData = this.createGraphDataFromRaw(emotionDataResponse[0]['moods_range'][1])

          this.emotionDataService.setPastWeekEmotionData(
            emotionDataResponse[0]['moods_range'][0]
          );
          this.weekData = this.createGraphDataFromRaw( emotionDataResponse[0]['moods_range'][0])
          this.graphData = this.weekData;
          this.emotionDataService.setDateValues(emotionDataResponse[0]['moods_range'][2]);
          this.emotionDataService.handleGetRequestSuccess();
        },
        (error) => {
          console.log(error);
          this.emotionDataService.handleGetRequestError();
        }
      );  
  }

  setGraphType(graphType){
    this.currentGraph = graphType;
    if (graphType === 'month'){
      this.graphTitle = `My Emotions: ${this.dateOneMonthAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`
      this.graphData = this.monthData
    }else {
      this.graphTitle = `My Emotions: ${this.dateOneWeekAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`
      this.graphData = this.weekData
    }
  }
  createGraphDataFromRaw(rawDataArray){
    let count = -1
    let graphFormat = rawDataArray.map((moodPoint) => {
      count = count + 1;
      return {x:count,y:moodPoint, info:''}
    })
    return graphFormat
  }

}
