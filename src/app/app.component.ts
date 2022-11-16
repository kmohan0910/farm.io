import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './FeaturesModules/SignupComponent/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth : AuthService , private route : Router){}
  ngOnInit(){
   var res= this.auth.autologin()
   if(res=='true'){
    this.route.navigate(['/home'])
   }
   this.auth.isLoggedin.next(res=='true')
  }
}
