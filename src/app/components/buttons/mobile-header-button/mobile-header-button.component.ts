import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-header-button',
  templateUrl: './mobile-header-button.component.html',
  styleUrls: ['./mobile-header-button.component.scss']
})
export class MobileHeaderButtonComponent implements OnInit {

  @Input('openCloseHeader') openCloseHeader : () => void;
  constructor() { }

  ngOnInit(): void {
  }

}
