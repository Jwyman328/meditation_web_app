import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meditation-course-card',
  templateUrl: './meditation-course-card.component.html',
  styleUrls: ['./meditation-course-card.component.scss']
})
export class MeditationCourseCardComponent implements OnInit {
  @Input('courseTitleText') courseTitleText:string;
  @Input('imageUrl') imageUrl:string;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  /**
   * Navigate to the course cards individual course page.
   */
  navigateToCourse = () => {
    this.route.navigate([`individual-meditation-course`,`${this.courseTitleText}`])
  }

}
