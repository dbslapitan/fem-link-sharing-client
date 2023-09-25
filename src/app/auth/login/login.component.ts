import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  get emailControl(){
    return this.loginForm.controls["email"];
  }

  get passwordControl(){
    return this.loginForm.controls["password"];
  }

  checkInputForError(control: FormControl){
    if(control.invalid && control.touched){
      return "error";
    }
    return "";
  }

  onSubmit(){
    console.log(this.loginForm.getRawValue());
  }
}
