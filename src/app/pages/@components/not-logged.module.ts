import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotLoggedRoutingModule } from './not-logged-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    NotLoggedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NotLoggedModule { }
