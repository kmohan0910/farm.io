import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/FeaturesModules/SignupComponent/auth.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  isLoggedin: boolean
  constructor(private auth: AuthService) {
    
   }
  logout(){
    this.isLoggedin=!this.isLoggedin
    this.auth.isLoggedin.next(false)
    localStorage.setItem('loggedin' , 'false')
    //console.log('logout' , this.isLoggedin)
  }
  ngOnInit() {
    console.log('headerng')
    this.auth.isLoggedin.subscribe(val=>console.log(val))
    this.auth.isLoggedin.subscribe(x=>{
      this.isLoggedin=x
     // console.log(x, "inHeader")
    }
      )
  }

}
