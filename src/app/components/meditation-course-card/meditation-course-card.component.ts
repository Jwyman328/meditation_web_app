import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meditation-course-card',
  templateUrl: './meditation-course-card.component.html',
  styleUrls: ['./meditation-course-card.component.scss']
})
export class MeditationCourseCardComponent implements OnInit {
  @Input('courseTitleText') courseTitleText:string;
  @Input('imageUrl') imageUrl:string;
  constructor() { }

  ngOnInit(): void {
  }

}
