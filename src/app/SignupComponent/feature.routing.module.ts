import { Injectable, NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import { HomeComponentComponent } from '../HomeComponent/home-component.component';
import { Signup } from './signup.component';
const routes: Routes = [
{path: '', component:Signup},
    { path: "./home",component: HomeComponentComponent }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {

}
