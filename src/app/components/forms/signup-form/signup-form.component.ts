import { Component, OnInit, OnChanges } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { passwordValidator } from '../../../custom-validators/password-validator';
import { Router } from '@angular/router';
import { isPasswordAndRepeatPasswordAreEqual } from '../../../custom-validators/password-repeatPassword-equal-validator';
import { SignupUserService } from '../../../services/http-requests/signup-user.service';
import { getSignUpFormData } from '../login-form/helperFunctions/getSignUpFormData';
import { UserAuthDataService } from '../../../services/userData/user-auth-data.service';
import { signUpServerResponse } from '../../../models/http-responses/signUpServerResponse';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
    repeatPassword: new FormControl(''),
  });

  constructor(private router: Router, public signupUser:SignupUserService, private userAuthDataService: UserAuthDataService) {}

  ngOnInit(): void {}


  /**
   * Reset form if valid. and Route to Homepage
   *
   * Check that both passwords match, set error if not.
   */
  onSubmitForm = () => {
    if (
      isPasswordAndRepeatPasswordAreEqual(
        this.signUpForm.get('password'),
        this.signUpForm.get('repeatPassword')
      )
    ){
      if (this.signUpForm.valid) {
        let signUpPostData = getSignUpFormData(this.signUpForm);
        let signUpAttempt =  this.signupUser.postSignUpUser(signUpPostData);
        signUpAttempt.subscribe((userToken:signUpServerResponse) => {
            if (userToken){
              this.userAuthDataService.setToken(userToken.token)
              this.signupUser.handleRequestSuccess()
              this.signUpForm.reset();
              this.router.navigate(['/']);
            }else{
              this.signupUser.handleRequestError()
            }
        }, (error)=>{
          this.signupUser.handleRequestError()
        })
       
      } else {
        console.log('invalid');
      }
    }else{
      // set error if passwords are not equal
      this.signUpForm.setErrors({passwordsEqual:true})
      this.signupUser.handleRequestError()

    }
    
  };
}
