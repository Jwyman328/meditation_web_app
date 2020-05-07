import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, DoCheck } from '@angular/core';
import { CreateJournalService } from '../../services/http-requests/create-journal.service';
import { UserAuthDataService } from '../../services/userData/user-auth-data.service';
import { emotionTextToNumberValue } from './helper_functions/returnNumberFromEmotionText';

@Component({
  selector: 'app-mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss']
})
export class MentalHealthComponent implements OnInit {
  backgroundImage = 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

  choosenEmotion = 'neutral'
  todayDate = new Date();
  journalText:string = '';
  
  constructor(public createJournalService:CreateJournalService,private userAuthDataService:UserAuthDataService ) { }

  ngOnInit(): void {
  }


  setEmotion = (emotion) => {
    this.choosenEmotion= emotion;
  }

  setJournalText = ($event) => {
    console.log($event, 'event')
  }

  submitEmotion = () => {
    console.log(this.userAuthDataService.token, 'token')
    let date = this.todayDate.toLocaleDateString() ;
    let [month,day,year] = date.split('/')
    let newDate = `${year}-${month}-${day}`
    let emotionNumberValue = emotionTextToNumberValue(this.choosenEmotion)
    
    const journalPostData = {date:newDate,text:this.journalText, mood:emotionNumberValue}
    const createJournalPostRequest = this.createJournalService.createJournal( journalPostData,this.userAuthDataService.token);
    createJournalPostRequest.subscribe((response) => {
      console.log(response)
      this.createJournalService.handlePostSuccess()
      this.journalText = '';
      // 
    },(error)=>{
      console.log(error)
      this.createJournalService.handlePostError()
    })
    console.log('submitted boy')
  }

}
