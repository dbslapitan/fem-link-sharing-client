import {AbstractControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

export function passwordNotMatchValidator(): ValidatorFn {
  return (form: AbstractControl) => {
    const formControl = form as FormGroup;
    const password = formControl.controls['password'];
    const confirmPassword = formControl.controls['confirmPassword'];
    if(password.value !== confirmPassword.value){
      return {
        passwordNotMatch: true
      }
    }
    return null;
  }
}
