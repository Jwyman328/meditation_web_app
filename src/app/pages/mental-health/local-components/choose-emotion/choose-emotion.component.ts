import { Component, OnInit, Input } from '@angular/core';
import { MentalHealthComponentStateService } from '../../../../services/componentSharing/mental-health-component-state.service';

@Component({
  selector: 'app-choose-emotion',
  templateUrl: './choose-emotion.component.html',
  styleUrls: ['./choose-emotion.component.scss']
})
export class ChooseEmotionComponent implements OnInit {

  @Input('emotionTitleText') emotionTitleText:string;
  constructor(private mentalHealthComponentStateService: MentalHealthComponentStateService) { }

  ngOnInit(): void {
  }

  setEmotion = (emotion: string) => {
    this.mentalHealthComponentStateService.choosenEmotion.next(emotion)
  };

}
 