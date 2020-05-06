import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { meditationsAccessibleByTitle } from '../../meditation-data/meditations_accessible_by_title';
import { individualMeditationModel } from '../../models/meditation-models/individual-meditationModel';

@Component({
  selector: 'app-individual-meditation-course-page',
  templateUrl: './individual-meditation-course-page.component.html',
  styleUrls: ['./individual-meditation-course-page.component.scss'],
})
export class IndividualMeditationCoursePageComponent implements OnInit {
  courseData: {
    photo_url: string;
    individualMeditations: individualMeditationModel[];
    course_title: string;
  };
  individualMeditations: individualMeditationModel[];
  courseTitle: string;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.courseTitle = this.activatedRouter.snapshot.paramMap.get('courseId');
    this.courseData = meditationsAccessibleByTitle[this.courseTitle]; //

    this.individualMeditations =
      meditationsAccessibleByTitle[this.courseTitle].individual_meditations;
  }

  individCourseData = meditationsAccessibleByTitle[''];

  ngOnInit(): void {}
}
