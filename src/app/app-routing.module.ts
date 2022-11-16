import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponentComponent } from './catalog/catalog-component/catalog-component.component';
import { HomeComponent } from './FeaturesModules/HomeComponent/home-component.component';
import { AuthGuard } from './FeaturesModules/SignupComponent/authguard.service';
import { Signup } from './FeaturesModules/SignupComponent/signup.component';

const route1: Routes=[
  {path:'' , redirectTo  : '/login' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent , canActivate: [AuthGuard] },
  {path: 'login' ,  component: Signup },
  {path:'catalog' ,component: CatalogComponentComponent ,  canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(route1)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
