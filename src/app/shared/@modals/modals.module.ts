import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

const modals = [SigninComponent, SignupComponent];

@NgModule({
  declarations: [...modals],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  entryComponents: [...modals],
  exports: [...modals],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ModalsModule { }
