import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotLoggedRoutingModule } from './not-logged-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { GalleryModule } from  '@ngx-gallery/core';
import { GALLERY_CONFIG } from '@ngx-gallery/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SigninComponent } from 'src/app/shared/@modals/signin/signin.component';
import { SignupComponent } from 'src/app/shared/@modals/signup/signup.component';
import { ModalsModule } from 'src/app/shared/@modals/modals.module';
import { MenuOcasionComponent } from './menu-ocasion/menu-ocasion.component';

const modals = [SigninComponent, SignupComponent];
@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    MenuOcasionComponent,
  ],
  imports: [
    CommonModule,
    NotLoggedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    GalleryModule,
    CarouselModule,
    ModalsModule,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    }
  ]
})
export class NotLoggedModule { }
