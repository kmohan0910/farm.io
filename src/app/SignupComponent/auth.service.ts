import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route : Router) { }



  signup(email: string, password: string) {
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3qsvT9MAzAQxFjAz3083kgLqqL2xkO38', 
    { email: email, password: password, returnSecureToken: true }).subscribe(ans =>{
      this.route.navigate([''])
    }
      ,error=> console.log(error.message))
      
      
  }
}
