import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockSelectPipe } from './pipes/stock-select.pipe';
import { FooterComponent } from './@components/footer/footer.component';
import { CarouselProductsComponent } from './@components/carousel-products/carousel-products.component';
import { MaterialModule } from '../material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

const pipes = [StockSelectPipe]
const components = [FooterComponent, CarouselProductsComponent]
@NgModule({
  declarations: [...pipes, ...components, CarouselProductsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CarouselModule,
  ],
  exports: [...pipes, ...components],
})
export class SharedModule { }
