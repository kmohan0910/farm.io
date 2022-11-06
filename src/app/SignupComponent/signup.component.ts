import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  EmailValidator,
  Validators,
} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class Signup implements OnInit {
  form: FormGroup;
  loginmode: boolean;
  error: string = ""
  constructor(private AutheService :AuthService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
    });
    this.AutheService.error.subscribe(x=>{
      this.error=x;
      console.log(x,this.error)
    })
  }
  onsubmit() {
    if(!this.loginmode){
      console.log("login")
      this.AutheService.login(this.form.value.email, this.form.value.password)
    }else{ 
    this.AutheService.signup(this.form.value.email, this.form.value.password)}
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
