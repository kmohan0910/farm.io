import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/SignupComponent/auth.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit , OnChanges{
  isLoggedin: boolean
  constructor(private auth: AuthService) {
    
   }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.isLoggedin)
  }
  ngOnInit(): void {
    this.auth.isLoggedin.subscribe(x=>{
      this.isLoggedin=x
      console.log(x, "inHeader")
    }
      )
  }

}
