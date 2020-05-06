import { FormGroup } from '@angular/forms';
/**
 * Return Login Form json data object containing the entered email and password.
 * @param loginForm Login Form
 */
export function getSignUpFormData(signUpForm: FormGroup) {
  let signUpPostData = {
    username: signUpForm.get('email').value,
    password: signUpForm.get('password').value,
  };
  return signUpPostData;
}
