import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.scss']
})
export class MentalHealthComponent implements OnInit {
  backgroundImage = 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

  choosenEmotion = 'happy'
  todayDate = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }


  setEmotion = (emotion) => {
    this.choosenEmotion= emotion;
  }

  submitEmotion = () => {
    console.log('submitted boy')
  }






}
