import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin =new BehaviorSubject<boolean>(false);
  error= new Subject<string>();

  constructor(private http: HttpClient, private route : Router) {
    this.isLoggedin.next(false)

   }

   autologin(){
    var st = localStorage.getItem('loggedin')
    //console.log(st , 'autologin')
    return st
   }
   logout(){
    this.isLoggedin.next(false);
   }

  signup(email: string, password: string) {
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3qsvT9MAzAQxFjAz3083kgLqqL2xkO38', 
    { email: email, password: password, returnSecureToken: true }).subscribe(ans =>{
      this.route.navigate(['home'])
      this.isLoggedin.next(true)
      localStorage.setItem("loggedin" , "true")
    }
      ,error=> {
        console.log(error)
        this.error.next(error.error.error.message)
      })
      // this.route.navigate(['home'])
      // this.isLoggedin.next(true) 
      // localStorage.setItem("loggedin" , "true")
      
      
  }
  login(email : string , password: string){
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3qsvT9MAzAQxFjAz3083kgLqqL2xkO38',
    {
      email: email,
      password: password,
    returnSecureToken : true}).subscribe( ans=>{
      this.route.navigate(['home'])
      this.isLoggedin.next(true)
      localStorage.setItem("loggedin" , "true")
     // console.log(localStorage.getItem('loggedin'))


    },error=> {
      console.log(error)
      this.error.next(error.error.error.message)
    })

    // this.route.navigate(['home'])
    // this.isLoggedin.next(true)
    // localStorage.setItem("loggedin" , "true")
    // console.log(localStorage.getItem('loggedin'))

    }
  
}
