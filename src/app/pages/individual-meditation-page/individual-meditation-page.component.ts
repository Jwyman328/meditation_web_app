import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { IndividualMeditationsAccessibleByTitle } from '../../meditation-data/meditationCourseAndMeditation_accessible_by_titles';


@Component({
  selector: 'app-individual-meditation-page',
  templateUrl: './individual-meditation-page.component.html',
  styleUrls: ['./individual-meditation-page.component.scss'],
})
export class IndividualMeditationPageComponent  {
  meditationTitle:string;
  meditationPhotoUrl:string;
  courseTitle:string;
  meditationAudioUrl:string;

  @ViewChild('audioElement') audioElement: ElementRef;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.meditationTitle = this.activatedRouter.snapshot.paramMap.get('meditationTitle');
    this.courseTitle = this.activatedRouter.snapshot.paramMap.get('courseId');

    this.meditationPhotoUrl = IndividualMeditationsAccessibleByTitle[this.courseTitle][this.meditationTitle].photo_url; //
    this.meditationAudioUrl = IndividualMeditationsAccessibleByTitle[this.courseTitle][this.meditationTitle].audio_url; //
    //this.individualMeditations =
      //meditationsAccessibleByTitle[this.courseTitle].individual_meditations;
  }
 



  
}
