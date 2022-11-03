import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './HomeComponent/home-component/home-component.component';
import { Signup } from './SignupComponent/signup.component';

const routes: Routes = [

{path: "login", component: Signup },
{path: "", component: HomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
