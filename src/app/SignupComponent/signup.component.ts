import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  EmailValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class Signup implements OnInit {
  form: FormGroup;
  loginmode: boolean;
  constructor() {}
  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }
  onsubmit() {
    console.log('here', this.form);
  }
  onSwitch(){
    this.loginmode=!this.loginmode;
  }
  onClear() {
    // this.form.get('email')?.clearValidators() removing specific validators
    // this.form.get
    this.form.reset();
    console.log(this.form);
  }
}
