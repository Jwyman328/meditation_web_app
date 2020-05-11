import { Component, OnInit } from '@angular/core';
import { GetAllPastJournalsService } from '../../services/http-requests/get-all-past-journals.service';
import { UserAuthDataService } from '../../services/userData/user-auth-data.service';
import { emotionNumberToTextValue } from './helperFunctions/moodNumberToTextValue';
import { getAllPastJournalsResponseModel } from 'src/app/models/http-responses/getAllPastJournalsResponseModel';

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
  allJournals:getAllPastJournalsResponseModel;
  emotionNumberToTextValue=emotionNumberToTextValue;

  ngOnInit(): void {
    const allPastJournalsRequest = this.getAllPastJournalsService.getAllPastJournals(
      this.userAuthDataService.getToken()
    );
    allPastJournalsRequest.subscribe((allJournals:getAllPastJournalsResponseModel) => {
      this.allJournals = allJournals;
    }, (error)=> {
      console.log(error)
      this.getAllPastJournalsService.handleRequestError()
    })
  }

  // array of objects with id, text, mood, date
}
