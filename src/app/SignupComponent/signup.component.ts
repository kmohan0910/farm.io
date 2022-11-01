import { Component, OnInit } from "@angular/core";
import { FormGroup , FormControl} from "@angular/forms"

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styles: [`background-color: black`]
})

export class Signup implements OnInit{

    form : FormGroup;
    constructor(){

    }
    ngOnInit(): void {
        this.form = new FormGroup({

           username:  new FormControl(null),
           email: new FormControl(null),
           password: new FormControl(null)
           
        })
    }
    onsubmit(){
        console.log("here",this.form)
    }
 


}