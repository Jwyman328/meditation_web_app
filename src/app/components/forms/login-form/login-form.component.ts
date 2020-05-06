import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserService } from '../../../services/http-requests/login-user.service';
import { loginResponseModel } from '../../../models/http-responses/login-response';
import { getLoginFormData } from './helperFunctions/getLoginFormData';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private route: Router, public loginUser: LoginUserService) {}

  ngOnInit(): void {}

  /**
   * If form is valid, naviagate to homepage
   */
  handleLoginSubmit = () => {
    let postData = getLoginFormData(this.loginForm);
    if (this.loginForm.valid) {
      let loginAttempt = this.loginUser.postLoginUser(postData);
      loginAttempt.subscribe(
        (responseData: loginResponseModel) => {
          if (responseData.token) {
            this.loginUser.handleLoginRequestSuccess();
            this.route.navigate(['/']);
          } else {
            this.loginUser.handleLoginRequestError();
          }
        },
        (error) => {
          this.loginUser.handleLoginRequestError();
          console.log('error', error);
        }
      );
      
    }
  };
}
