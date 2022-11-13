import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponentComponent } from './catalog/catalog-component/catalog-component.component';

const route1: Routes=[
  {path:'catalog' , component: CatalogComponentComponent},
  {path: 'home' ,  loadChildren: ()=> import('./FeaturesModules/feature.module').then(m=>m.FeatureModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(route1)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
