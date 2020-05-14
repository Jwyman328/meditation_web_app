import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  DoCheck,
  OnChanges,
} from '@angular/core';
import { CreateJournalService } from '../../services/http-requests/create-journal.service';
import { UserAuthDataService } from '../../services/userData/user-auth-data.service';
import { emotionTextToNumberValue } from './helper_functions/returnNumberFromEmotionText';
import { createTodaysFormatedDate } from './helper_functions/createTodaysFormatedDate';
import { formatJournalPostData } from './helper_functions/formatJournalPostData';
import { Router } from '@angular/router';
import { MentalHealthComponentStateService } from '../../services/componentSharing/mental-health-component-state.service';

@Component({
  selector: 'app-mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss'],
})
export class MentalHealthComponent implements OnInit {
  backgroundImage =
    'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

  choosenEmotion;
  todayDate = new Date();
  journalText;

  constructor(
    public createJournalService: CreateJournalService,
    private userAuthDataService: UserAuthDataService,
    private mentalHealthComponentStateService: MentalHealthComponentStateService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const choosenEmotionService = this.mentalHealthComponentStateService.choosenEmotion.subscribe(
      (choosenEmotionValue) => {
        this.choosenEmotion = choosenEmotionValue;
      }
    );
    const journalTextService = this.mentalHealthComponentStateService.journalText.subscribe(
      (journalTextValue) => {
        this.journalText = journalTextValue;
      }
    );
  }
  
}
