import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
  })
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  /**
   * If form is valid, naviagate to homepage
   */
  handleLoginSubmit = () => {
    console.log(this.loginForm)
    if(this.loginForm.valid){
      this.route.navigate(['/'])
    }
  }

}
