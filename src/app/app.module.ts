import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/@components/home/home.component';
import { ProductDetailComponent } from './pages/@components/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StockSelectPipe } from './shared/pipes/stock-select.pipe';
import { SigninComponent } from './shared/@modals/signin/signin.component';
import { SignupComponent } from './shared/@modals/signup/signup.component';
import { ModalsModule } from './shared/@modals/modals.module';
import { PagesComponent } from './pages/pages.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const pipes = [StockSelectPipe];
const modals = [SigninComponent, SignupComponent];
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ModalsModule,
    // NgbModule,
  ],
  providers: [...pipes],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
