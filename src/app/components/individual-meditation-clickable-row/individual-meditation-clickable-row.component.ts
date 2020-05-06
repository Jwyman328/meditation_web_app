import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-meditation-clickable-row',
  templateUrl: './individual-meditation-clickable-row.component.html',
  styleUrls: ['./individual-meditation-clickable-row.component.scss']
})
export class IndividualMeditationClickableRowComponent implements OnInit {
  @Input('meditationNumber') meditationNumber:number;
  @Input('meditationTitleText') meditationTitleText:string;
  @Input('meditationCourseTitle') meditationCourseTitle:string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToMeditation = () => {
    this.route.navigate(['individual-meditation-page',`${this.meditationCourseTitle}`,`${this.meditationTitleText}`])
  }

}
