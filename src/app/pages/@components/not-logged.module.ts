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
import { StockSelectPipe } from 'src/app/shared/pipes/stock-select.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { SelectAddressModalComponent } from '../@components-logged/@modals/select-address-modal/select-address-modal.component';
import { TipsComponent } from './tips/tips.component';

const modals = [SelectAddressModalComponent];
@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    MenuOcasionComponent,
    ProductsComponent,
    SelectAddressModalComponent,
    TipsComponent,
  ],
  imports: [
    CommonModule,
    NotLoggedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    GalleryModule,
    CarouselModule,
    ModalsModule,
    SharedModule,
  ],
  entryComponents: [modals],
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
