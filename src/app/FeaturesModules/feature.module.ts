import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./HomeComponent/home-component.component";
import { FeatureRoutingModule } from "./feature.routing.module";
import { Signup } from "./SignupComponent/signup.component";


@NgModule({
imports: [FeatureRoutingModule ,CommonModule, ReactiveFormsModule],// importing loaded childs here
declarations:[Signup , HomeComponent]// declaring components here
})

export class FeatureModule {

}