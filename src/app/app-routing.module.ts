import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponentComponent } from './catalog/catalog-component/catalog-component.component';

const route1: Routes=[
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: "catalog" , component: CatalogComponentComponent },
  {path: "login", loadChildren: ()=> import('./SignupComponent/feature.module').then(m=>m.FeatureModule)},
   {path: "home",loadChildren: ()=> import('./SignupComponent/feature.module').then(m=>m.FeatureModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(route1)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
