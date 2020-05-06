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

@Component({
  selector: 'app-individual-meditation-page',
  templateUrl: './individual-meditation-page.component.html',
  styleUrls: ['./individual-meditation-page.component.scss'],
})
export class IndividualMeditationPageComponent  {


  @ViewChild('audioElement') audioElement: ElementRef;
  constructor() {}

 



  
}
