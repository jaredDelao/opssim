import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BillsComponent } from './bills/bills.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { UppercaseDirective } from 'src/app/shared/directives/uppercase.directive';

const components = [AccountMenuComponent, BillsComponent];
const directives = [UppercaseDirective];
@NgModule({
  declarations: [
    ...components,
    ...directives,
    AddBillComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    // ...components
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LoggedModule { }
