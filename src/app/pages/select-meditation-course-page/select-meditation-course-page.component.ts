import { Component, OnInit } from '@angular/core';
import { all_meditation_courses } from '../../meditation-data/all_meditation_courses';

@Component({
  selector: 'app-select-meditation-course-page',
  templateUrl: './select-meditation-course-page.component.html',
  styleUrls: ['./select-meditation-course-page.component.scss']
})
export class SelectMeditationCoursePageComponent implements OnInit {
  meditation_course_data = all_meditation_courses;
  constructor() { }

  ngOnInit(): void {
  }

}
