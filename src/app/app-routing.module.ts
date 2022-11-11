import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponentComponent } from './catalog/catalog-component/catalog-component.component';
import { HomeComponentComponent } from './HomeComponent/home-component/home-component.component';
import { Signup } from './SignupComponent/signup.component';

const routes: Routes = [
{path: '' , redirectTo: 'home' , pathMatch: 'full'},
{path: "login", component: Signup },
{path: "home", component: HomeComponentComponent},
{path: "catalog" , component: CatalogComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
