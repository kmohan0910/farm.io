import { Injectable, NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import { CatalogComponentComponent } from '../catalog/catalog-component/catalog-component.component';
import { HomeComponent } from './HomeComponent/home-component.component';
import { Signup } from './SignupComponent/signup.component';
const routes: Routes = [
    { path: "", redirectTo:'home',pathMatch:'full'},
    { path: "home", component: HomeComponent },
    { path: "catalog", component: CatalogComponentComponent },
    { path: "login", component: Signup },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {

}
