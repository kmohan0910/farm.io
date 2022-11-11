import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Signup } from './SignupComponent/signup.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { HomeComponentComponent } from './HomeComponent/home-component/home-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponentComponent } from './catalog/catalog-component/catalog-component.component';


@NgModule({
  declarations: [
    AppComponent,
    Signup,
    HeaderComponentComponent,
    HomeComponentComponent,
    CatalogComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
