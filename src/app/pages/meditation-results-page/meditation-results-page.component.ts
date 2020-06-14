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
  import { Subject } from 'rxjs';
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
  viewDate: Date = new Date()
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  events : CalendarEvent[] = [
    {
      start: new Date(),
      end: new Date(),
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
