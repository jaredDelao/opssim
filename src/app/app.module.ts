import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/@components/home/home.component';
import { ProductDetailComponent } from './pages/@components/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CartComponent } from './pages/@components/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockSelectPipe } from './shared/pipes/stock-select.pipe';
import { CheckoutComponent } from './pages/@components/checkout/checkout.component';

const pipes = [StockSelectPipe]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    ...pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
