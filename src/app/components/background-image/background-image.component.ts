import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss']
})
export class BackgroundImageComponent implements OnInit {

  constructor() { }
  @Input('url') url:string;
  ngOnInit(): void {
  }

}
