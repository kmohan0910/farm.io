import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponentComponent } from './shared/header-component/header-component.component';

import { HttpClientModule } from '@angular/common/http';
import { CatalogComponentComponent } from './catalog/catalog-component/catalog-component.component';
import { FeatureModule } from './FeaturesModules/feature.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CatalogComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
