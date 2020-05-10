import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getRandomIndexFromArray } from '../../pages/homepage/helperFunctions/getRandomIndexFromArray';
import { all_meditation_courses } from '../../meditation-data/all_meditation_courses';
import { individualMeditationModel } from '../../models/meditation-models/individual-meditationModel';

@Component({
  selector: 'app-suggested-meditation',
  templateUrl: './suggested-meditation.component.html',
  styleUrls: ['./suggested-meditation.component.scss']
})
export class SuggestedMeditationComponent implements OnInit {

  randomMeditation:individualMeditationModel;
  randomCourseTitle:string;
  constructor(private route:Router) {}

  ngOnInit(): void {
    this.getRandomMeditation()
    
  }

  routeToRandomMeditation(){
    this.route.navigate(['individual-meditation-page',this.randomCourseTitle,this.randomMeditation.title])
  }

  getRandomMeditation(){
    const randomCourseNumber = getRandomIndexFromArray(all_meditation_courses);
    const randomCourseMeditations =  all_meditation_courses[randomCourseNumber].individual_meditations
    this.randomCourseTitle =  all_meditation_courses[randomCourseNumber].course_title
    const randomMeditationIndex = getRandomIndexFromArray(randomCourseMeditations)
    this.randomMeditation =  randomCourseMeditations[randomMeditationIndex]
  }

}
