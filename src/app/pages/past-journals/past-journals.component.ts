import { Component, OnInit } from '@angular/core';
import { GetAllPastJournalsService } from '../../services/http-requests/get-all-past-journals.service';
import { UserAuthDataService } from '../../services/userData/user-auth-data.service';
import { emotionNumberToTextValue } from './helperFunctions/moodNumberToTextValue';

@Component({
  selector: 'app-past-journals',
  templateUrl: './past-journals.component.html',
  styleUrls: ['./past-journals.component.scss'],
})
export class PastJournalsComponent implements OnInit {
  constructor(
    private getAllPastJournalsService: GetAllPastJournalsService,
    private userAuthDataService: UserAuthDataService
  ) {}
  allJournals;
  emotionNumberToTextValue=emotionNumberToTextValue;

  ngOnInit(): void {
    const allPastJournalsRequest = this.getAllPastJournalsService.getAllPastJournals(
      this.userAuthDataService.token
    );
    allPastJournalsRequest.subscribe((allJournals) => {
      this.allJournals = allJournals;
    }, (error)=> {
      console.log(error)
      this.getAllPastJournalsService.handleGetRequestError()
    })
  }

  // array of objects with id, text, mood, date
}
