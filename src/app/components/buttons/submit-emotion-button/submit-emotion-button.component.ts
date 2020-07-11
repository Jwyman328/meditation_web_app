import { Component, OnInit, Input } from '@angular/core';
import { UserAuthDataService } from '../../../services/userData/user-auth-data.service';
import { CreateJournalService } from '../../../services/http-requests/create-journal.service';
import { Router } from '@angular/router';
import { formatJournalPostData } from '../../../pages/mental-health/helper_functions/formatJournalPostData';
import { MentalHealthComponentStateService } from '../../../services/componentSharing/mental-health-component-state.service';

@Component({
  selector: 'app-submit-emotion-button',
  templateUrl: './submit-emotion-button.component.html',
  styleUrls: ['./submit-emotion-button.component.scss', '../form-button/form-button.component.scss']
})
export class SubmitEmotionButtonComponent implements OnInit {
  @Input('choosenEmotion') choosenEmotion;
  @Input('journalText')    journalText;
  constructor(
    public createJournalService: CreateJournalService,
    private userAuthDataService: UserAuthDataService,
    private mentalHealthComponentStateService:MentalHealthComponentStateService,
    private route: Router
  ) {}

  ngOnInit(): void {
  }

  submitEmotion = () => {
     const journalPostData = formatJournalPostData(
      this.choosenEmotion,
      this.journalText
    ); 

    const createJournalPostRequest = this.createJournalService.createJournal(
      journalPostData,
      this.userAuthDataService.getToken()
    );

    createJournalPostRequest.subscribe(
      (response) => {
        this.createJournalService.handleRequestSuccess();
        //this.journalText = '';
        this.mentalHealthComponentStateService.journalText.next('')
        // route back to main journal page
        this.route.navigate(['mental-health']);
      },
      (error) => {
        this.createJournalService.handleRequestError();
      }
    );
  };


}
