import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockSelectPipe } from './shared/pipes/stock-select.pipe';
import { MaterialModule } from './material.module';
import { PagesComponent } from './pages/pages.component';

const pipes = [StockSelectPipe]
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ...pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
