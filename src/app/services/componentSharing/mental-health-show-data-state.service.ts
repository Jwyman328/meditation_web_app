import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserAuthDataService } from '../userData/user-auth-data.service';
import { EmotionDataService } from '../http-requests/emotion-data.service';
import { emotionDataResponseModel } from 'src/app/models/http-responses/emotionDataResponseModel';
import { createGraphDataFromRaw } from 'src/app/pages/mental-health-show-data/helperFunctions/createGraphDataFromRawData';
import { individualGraphDataPoint } from '../../models/graphModels/graphDataFormat';

@Injectable({
  providedIn: 'root',
})
export class MentalHealthShowDataStateService {
  monthData = new Subject();
  weekData = new Subject()
  currentGraph = new BehaviorSubject('month');

  graphData = new Subject();

  graphType = new BehaviorSubject('month');
  today = new Date();

  dateOneMonthAgo: Date = new Date(
    new Date().setMonth(this.today.getMonth() - 1)
  );
  dateOneWeekAgo: Date = new Date(new Date().setDate(this.today.getDate() - 7));

  graphTitle = new BehaviorSubject(`My Emotions: ${this.dateOneWeekAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`);
  
  constructor(
    private emotionDataService: EmotionDataService,
    private userAuthDataService: UserAuthDataService,
    private route: Router
  ) {}

  setGraphType(graphType: string) {
    this.currentGraph.next(graphType) ;
    if (graphType === 'month') {
      this.graphTitle.next(`My Emotions: ${this.dateOneMonthAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`);
      this.graphData.next(this.monthData);
    } else {
      this.graphTitle.next(`My Emotions: ${this.dateOneWeekAgo.toLocaleDateString()}-${this.today.toLocaleDateString()}`);
      this.graphData.next(this.weekData);
    }
  }
}
