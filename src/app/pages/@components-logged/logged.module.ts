import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountMenuComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LoggedModule { }
