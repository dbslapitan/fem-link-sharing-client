import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {passwordNotMatchValidator} from "../../validators/password-not-match.validator";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
  './register-tablet.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    confirmPassword: [""]
  }, {
    validators: [passwordNotMatchValidator()]
  });

  constructor(private fb: FormBuilder) {
  }

  get emailControl(){
    return this.registerForm.controls["email"];
  }

  get passwordControl(){
    return this.registerForm.controls["password"];
  }

  get confirmPasswordControl(){
    return this.registerForm.controls["confirmPassword"];
  }

  checkInputForError(control: FormControl){
    if(control.invalid && control.touched){
      return "error";
    }
    return "";
  }

  checkConfirmPasswordError(){
    if(this.registerForm.errors?.passwordNotMatch && this.registerForm.controls['confirmPassword'].touched){
      return "error";
    }
    return null;
  }

  onSubmit(){
    console.log(this.registerForm.getRawValue());
  }
}
