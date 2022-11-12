import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponentComponent } from "../HomeComponent/home-component.component";
import { FeatureRoutingModule } from "./feature.routing.module";
import { Signup } from "./signup.component";


@NgModule({
imports: [FeatureRoutingModule ,CommonModule, ReactiveFormsModule],// importing loaded childs here
declarations:[Signup , HomeComponentComponent]// declaring components here
})

export class FeatureModule {

}