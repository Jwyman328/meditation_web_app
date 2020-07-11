import { OnInit,  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, } from '@angular/core';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours,
  } from 'date-fns';
  import { GetMeditationsService } from '../../services/http-requests/get-meditations.service';
  import { Subject } from 'rxjs';
  import { UserAuthDataService } from '../../services/userData/user-auth-data.service';
  import {
CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView,
  } from 'angular-calendar';

@Component({
  selector: 'app-meditation-results-page',
  templateUrl: './meditation-results-page.component.html',
  styleUrls: ['./meditation-results-page.component.scss']
})
export class MeditationResultsPageComponent implements OnInit {
  currentMeditationStreak:number = 1;
  meditationStreakMeasurement:string= this.currentMeditationStreak !== 1? "Days": "Day"
  
  //calender
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date()
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  events : CalendarEvent[] = [
    {
      start: new Date(2020, 6, 17),
      end: new Date(2020, 7, 18)  ,
      title: 'Meditation',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },]
  
  constructor(private getMeditationsService:GetMeditationsService,private userAuthDataService:UserAuthDataService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    const token = await this.userAuthDataService.getToken()
    this.getMeditationsService.getMeditationListened(token).subscribe((allmeditations => {
      this.calculateStreak(allmeditations)

      const backendMeditations = allmeditations.map(listenedMeditation => {
        return  {
          start: new Date(listenedMeditation.date_time_listened),
          end: new Date(listenedMeditation.date_time_listened) ,
          title: listenedMeditation.meditation_name,
          color: {
            primary: '#ad2121',
            secondary: '#FAE3E3',
          },
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
          draggable: true,
        }
      })
      this.events = backendMeditations
    }))
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  previousMonth(){
    const currentMonth = this.viewDate.getMonth()
    const pastMonth = currentMonth-1
    this.viewDate = new Date(2020,pastMonth,1)
  }
  nextMonth(){

    const currentMonth = this.viewDate.getMonth()
    const nextMonth = currentMonth + 1
    this.viewDate = new Date(2020,nextMonth,1)
  }

  calculateStreak(currentMeditationEventsStandard){
    let currentMeditationEvents = [...currentMeditationEventsStandard].reverse()

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let meditationStreak = 0;
    let compareToDate:any = new Date()
    for(let meditation=0;meditation < currentMeditationEvents.length; meditation++){
      let currentMeditationDate:any = new Date(currentMeditationEvents[meditation].date_time_listened)
      const diffDays = Math.round(Math.abs((compareToDate - currentMeditationDate) / oneDay));
      if (diffDays > 1){
        break
      }else if (currentMeditationDate.toDateString() === compareToDate.toDateString() && meditation !== 0){
        continue
      }else{
          meditationStreak +=1
           compareToDate = currentMeditationDate
         }
    }
    this.currentMeditationStreak = meditationStreak;
  }

}
