import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getRandomIndexFromArray } from '../../pages/homepage/helperFunctions/getRandomIndexFromArray';
import { all_meditation_courses } from '../../meditation-data/all_meditation_courses';

@Component({
  selector: 'app-suggested-meditation',
  templateUrl: './suggested-meditation.component.html',
  styleUrls: ['./suggested-meditation.component.scss']
})
export class SuggestedMeditationComponent implements OnInit {

  randomMeditation;
  randomCourseTitle;
  constructor(private route:Router) {}

  ngOnInit(): void {
    this.getRandomMeditation()
    
  }

  routeToRandomMeditation(){
    this.route.navigate(['individual-meditation-page',this.randomCourseTitle,this.randomMeditation.title])
  }

  getRandomMeditation(){
    // get a random number for the length of all meditation courses 
    //let randomCourseNumber = all_meditation_courses.length
    const randomCourseNumber = getRandomIndexFromArray(all_meditation_courses);
    const randomCourseMeditations =  all_meditation_courses[randomCourseNumber].individual_meditations
    this.randomCourseTitle =  all_meditation_courses[randomCourseNumber].course_title
    const randomMeditationIndex = getRandomIndexFromArray(randomCourseMeditations)
    this.randomMeditation =  randomCourseMeditations[randomMeditationIndex]
    console.log(this.randomMeditation,this.randomCourseTitle)
    //this.route.navigate(['individual-meditation-page',randomCourseTitle,randomMeditation.title])
    //'individual-meditation-page/:courseId/:meditationTitle'

  }

}
