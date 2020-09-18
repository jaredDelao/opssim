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
    { id: '1', src: 'https://opssim.com/images/thumbs/0000206_alejo_415.jpeg' },
    { id: '2', src: 'https://opssim.com/images/thumbs/0000203_circe_415.jpeg' },
    { id: '3', src: 'https://opssim.com/images/thumbs/0000221_orion_415.jpeg' },
    { id: '4', src: 'https://opssim.com/images/thumbs/0000224_poseidon_415.jpeg' },
    { id: '5', src: 'https://opssim.com/images/thumbs/0000227_urano_415.jpeg' },
    { id: '6', src: 'https://opssim.com/images/thumbs/0000216_olimpo-plus_415.jpeg' },
  ]


  constructor() { }

  ngOnInit() {
  }

}
