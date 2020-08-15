import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BillsComponent } from './bills/bills.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { UppercaseDirective } from 'src/app/shared/directives/uppercase.directive';
import { WishlistComponent } from './wishlist/wishlist.component';
import { StockSelectPipe } from 'src/app/shared/pipes/stock-select.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressModalComponent } from './@modals/address-modal/address-modal.component';

const components = [
  AccountMenuComponent, 
  BillsComponent, 
  AddBillComponent,
  WishlistComponent,
  ProfileComponent,
  AddressComponent,
  OrdersComponent,
  AddressModalComponent
];
const directives = [UppercaseDirective];
const modals = [
  AddressModalComponent
]
// const pipes = [StockSelectPipe];
@NgModule({
  declarations: [
    ...components,
    ...directives,
    
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    // ...components
  ],
  entryComponents: [
    ...modals
  ]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LoggedModule { }
