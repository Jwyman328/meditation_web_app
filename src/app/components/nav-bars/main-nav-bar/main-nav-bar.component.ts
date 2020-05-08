import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss']
})
export class MainNavBarComponent implements OnInit {
  @Input('isMeditationContainer') isMeditationContainer  = false;
  constructor() { }

  ngOnInit(): void {
  }

}
