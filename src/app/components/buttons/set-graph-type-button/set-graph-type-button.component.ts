import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-graph-type-button',
  templateUrl: './set-graph-type-button.component.html',
  styleUrls: ['./set-graph-type-button.component.scss']
})
export class SetGraphTypeButtonComponent implements OnInit {
  @Input('graphType') graphType;
  @Input('graphText') graphText;
  constructor() { }

  ngOnInit(): void {
  }

}
