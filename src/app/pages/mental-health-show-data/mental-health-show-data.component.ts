import { Component, OnInit } from '@angular/core';
import { EmotionDataService } from '../../services/http-requests/emotion-data.service';
import { UserAuthDataService } from '../../services/userData/user-auth-data.service';

@Component({
  selector: 'app-mental-health-show-data',
  templateUrl: './mental-health-show-data.component.html',
  styleUrls: ['./mental-health-show-data.component.scss'],
})
export class MentalHealthShowDataComponent implements OnInit {
  backgroundImageUrl =
    'https://images.pexels.com/photos/1200225/pexels-photo-1200225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
  constructor(
    private emotionDataService: EmotionDataService,
    private userAuthDataService: UserAuthDataService
  ) {}

  ngOnInit(): void {
    //makae a request and get the data to display
    this.emotionDataService
      .getAllEmotionData(this.userAuthDataService.token)
      .subscribe(
        (emotionDataResponse) => {
          console.log(emotionDataResponse, 'dr');
          this.emotionDataService.setPastMonthEmotionData(
            emotionDataResponse[0]['moods_range'][0]
          );
          this.emotionDataService.setPastWeekEmotionData(
            emotionDataResponse[0]['moods_range'][1]
          );
          this.emotionDataService.setDateValues(emotionDataResponse[0]['moods_range'][2]);
          this.emotionDataService.handleGetRequestSuccess();
        },
        (error) => {
          console.log(error);
          this.emotionDataService.handleGetRequestError();
        }
      );
  }
}
