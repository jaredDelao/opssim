import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockSelectPipe } from './pipes/stock-select.pipe';

const pipes = [StockSelectPipe]
@NgModule({
  declarations: [...pipes],
  imports: [
    CommonModule
  ],
  exports: [...pipes]
})
export class SharedModule { }
