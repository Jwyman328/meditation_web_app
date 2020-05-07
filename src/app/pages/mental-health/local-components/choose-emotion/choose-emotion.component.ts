import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choose-emotion',
  templateUrl: './choose-emotion.component.html',
  styleUrls: ['./choose-emotion.component.scss']
})
export class ChooseEmotionComponent implements OnInit {

  @Input('emotionTitleText') emotionTitleText:string;
  @Input('setEmotion')       setEmotion:any;
  constructor() { }

  ngOnInit(): void {
  }

}
