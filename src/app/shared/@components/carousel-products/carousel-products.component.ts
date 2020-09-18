import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.scss']
})
export class CarouselProductsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Anterior', 'Siguiente'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true
  }

  slidesStore: any[] = [
    { id: '1', src: '../../../../assets/images/demo/DonPedroGranRva600x800.jpg' },
    { id: '2', src: '../../../../assets/images/demo/azteca_oro_600x800.jpg' },
    { id: '3', src: '../../../../assets/images/demo/botella3.jpg' },
    { id: '4', src: '../../../../assets/images/demo/botella4.jpg' },
    { id: '5', src: '../../../../assets/images/demo/botella1.jpg' },
    { id: '6', src: '../../../../assets/images/demo/botella2.jpg' },
    { id: '7', src: '../../../../assets/images/demo/botella3.jpg' },
    { id: '8', src: '../../../../assets/images/demo/botella4.jpg' }
  ]


  constructor() { }

  ngOnInit() {
  }

}
