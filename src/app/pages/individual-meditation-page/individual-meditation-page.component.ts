import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecordMeditationListenedService } from '../../services/http-requests/record-meditation-listened.service';
import { IndividualMeditationsAccessibleByTitle } from '../../meditation-data/meditationCourseAndMeditation_accessible_by_titles';
import { UserAuthDataService } from '../../services/userData/user-auth-data.service';

@Component({
  selector: 'app-individual-meditation-page',
  templateUrl: './individual-meditation-page.component.html',
  styleUrls: ['./individual-meditation-page.component.scss'],
})
export class IndividualMeditationPageComponent {
  meditationTitle: string;
  meditationPhotoUrl: string;
  courseTitle: string;
  meditationAudioUrl: string;

  @ViewChild('audioElement') audioElement: ElementRef;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private recordMeditationListened: RecordMeditationListenedService,
    private userAuthDataService: UserAuthDataService
  ) {
    this.meditationTitle = this.activatedRouter.snapshot.paramMap.get(
      'meditationTitle'
    );
    this.courseTitle = this.activatedRouter.snapshot.paramMap.get('courseId');

    this.meditationPhotoUrl =
      IndividualMeditationsAccessibleByTitle[this.courseTitle][
        this.meditationTitle
      ].photo_url; //
    this.meditationAudioUrl =
      IndividualMeditationsAccessibleByTitle[this.courseTitle][
        this.meditationTitle
      ].audio_url; //
    //this.individualMeditations =
    //meditationsAccessibleByTitle[this.courseTitle].individual_meditations;
  }

  /**
   * Record how much time the user has meditated if they have meditated.
   */
  sendPostToRecordMeditationListened() {
    if (this.audioElement.nativeElement.currentTime > 0) {
      const response = this.recordMeditationListened.recordMeditationListened(
        {
          meditation_amount_time_listened: this.audioElement.nativeElement
            .currentTime,
          meditation_name: this.meditationTitle,
        },
        this.userAuthDataService.getToken()
      );
      response.subscribe(
        (value) => {
          console.log(value, 'value');
        },
        (error) => {
          console.log('err', error);
        }
      );
    }
  }


  ngOnDestroy() {
    this.sendPostToRecordMeditationListened();
  }
}
