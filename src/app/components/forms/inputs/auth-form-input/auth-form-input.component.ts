import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form-input',
  templateUrl: './auth-form-input.component.html',
  styleUrls: ['./auth-form-input.component.scss']
})
export class AuthFormInputComponent implements OnInit {

  @Input('placeHolder') placeHolder:string;
  @Input('type') type:string;
  constructor() { }

  ngOnInit(): void {
  }

}
