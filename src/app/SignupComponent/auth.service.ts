import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin =new Subject<boolean>();
  error= new Subject<string>();

  constructor(private http: HttpClient, private route : Router) {
    this.isLoggedin.next(false)

   }



  signup(email: string, password: string) {
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3qsvT9MAzAQxFjAz3083kgLqqL2xkO38', 
    { email: email, password: password, returnSecureToken: true }).subscribe(ans =>{
      this.route.navigate(['home'])
      console.log(this.isLoggedin)
      this.isLoggedin.next(true)
      console.log(this.isLoggedin)
    }
      ,error=> {
        console.log(error)
        this.error.next(error.error.error.message)
      })
      
      
  }
}
