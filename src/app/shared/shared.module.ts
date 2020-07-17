import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockSelectPipe } from './pipes/stock-select.pipe';
import { FooterComponent } from './@components/footer/footer.component';

const pipes = [StockSelectPipe]
const components = [FooterComponent]
@NgModule({
  declarations: [...pipes, ...components],
  imports: [
    CommonModule
  ],
  exports: [...pipes, ...components],
})
export class SharedModule { }
