import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { EmotionDataService } from '../../services/http-requests/emotion-data.service';
import { UserAuthDataService } from '../../services/userData/user-auth-data.service';
import { Router } from '@angular/router';
import { createGraphDataFromRaw } from './helperFunctions/createGraphDataFromRawData';
import { emotionDataResponseModel } from 'src/app/models/http-responses/emotionDataResponseModel';
import { individualGraphDataPoint } from 'src/app/models/graphModels/graphDataFormat';
import { MentalHealthShowDataStateService } from '../../services/componentSharing/mental-health-show-data-state.service';

@Component({
  selector: 'app-mental-health-show-data',
  templateUrl: './mental-health-show-data.component.html',
  styleUrls: ['./mental-health-show-data.component.scss'],
})
export class MentalHealthShowDataComponent implements OnInit {
  monthData: individualGraphDataPoint[] = [];
  weekData: individualGraphDataPoint[] = [];
  graphData = this.monthData;
  currentGraph = 'month';
  today = new Date();
  
  graphWidth: number = 500;
  @ViewChild('pageContainer') pageContainer: ElementRef;
  dateOneMonthAgo: Date = new Date(
    new Date().setMonth(this.today.getMonth() - 1)
  );
  dateOneWeekAgo: Date = new Date(new Date().setDate(this.today.getDate() - 7));
  graphTitle = `My Emotions: ${this.dateOneWeekAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`; //`My Emotions: ${this.dateOneWeekAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`;

  backgroundImageUrl =
    'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
  constructor(
    private emotionDataService: EmotionDataService,
    private userAuthDataService: UserAuthDataService,
    private mentalHealthShowDataStateService:MentalHealthShowDataStateService,
    private route: Router
  ) {}

  ngAfterViewInit() {
    this.graphWidth = this.pageContainer.nativeElement.offsetWidth * 0.6;
  }



  ngOnInit(): void {
    //makae a request and get the data to display
    let monthDataSubscription = this.mentalHealthShowDataStateService.monthData.subscribe((monthDataValue: individualGraphDataPoint[])=>{
      //console.log(monthDataValue, 'mdv')
      this.monthData = monthDataValue
    })
    let weekDataSubscription = this.mentalHealthShowDataStateService.weekData.subscribe((weekDataValue:individualGraphDataPoint[]) =>{
        this.weekData = weekDataValue
    })

    let graphDataSubscription = this.mentalHealthShowDataStateService.graphData.subscribe((graphDataValue: individualGraphDataPoint[]) => {
      this.graphData = graphDataValue
    })

    this.emotionDataService
      .getAllEmotionData(this.userAuthDataService.getToken())
      .subscribe(
        (emotionDataResponse: emotionDataResponseModel) => {
          console.log(emotionDataResponse, 'dr');
          this.monthData = createGraphDataFromRaw(
            emotionDataResponse[0]['moods_range'][1]
          );
          this.mentalHealthShowDataStateService.monthData.next(createGraphDataFromRaw(
            emotionDataResponse[0]['moods_range'][1]
          ))

          this.weekData = createGraphDataFromRaw(
            emotionDataResponse[0]['moods_range'][0]
          );
          this.graphData = this.weekData;
          this.emotionDataService.handleRequestSuccess();
        },
        (error) => {
          console.log(error);
          this.emotionDataService.handleRequestError();
        }
      );
      
  }

  setGraphType(graphType: string) {
    this.mentalHealthShowDataStateService.setGraphType(graphType)
    this.currentGraph = graphType;
    if (graphType === 'month') {
      this.graphTitle = `My Emotions: ${this.dateOneMonthAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`;
      this.graphData = this.monthData;
    } else {
      this.graphTitle = `My Emotions: ${this.dateOneWeekAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`;
      this.graphData = this.weekData;
    }
  }

}
