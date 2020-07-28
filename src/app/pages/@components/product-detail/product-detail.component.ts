import { Component, OnInit } from '@angular/core';

import { GalleryItem, ImageItem } from '@ngx-gallery/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { SliderState } from '@ngx-gallery/core/lib/models/slider.model';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

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

  images: GalleryItem[];

  product: Product;

  constructor(public productsService: ProductsService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    // this.setImages();

    this.activatedRoute.params.subscribe((params: {idProduct: number}) => {
      this.getProductById(params.idProduct);
    })
  }

  getProductById(id: number) {
    this.productsService.getProductById(id).subscribe((resp) => {
      console.log(resp[0]);
      
      if (resp.length > 0) {
        this.product = resp[0];
        this.setImagesProduct(resp[0].sUrlImagenes);
      };
    })
  }

  setImagesProduct(imagesProduct: Array<string>) {
    debugger
    this.images = imagesProduct.reduce((acc, image) => {
      acc.push(new ImageItem({src: image, thumb: image}));
      return acc;
    }, [])
  }

  // setImages() {
  //   this.images = [
  //     new ImageItem({ src: '../../../../assets/images/demo/DonPedroGranRva600x800.jpg', thumb: '../../../../assets/images/demo/DonPedroGranRva600x800.jpg' }),
  //     new ImageItem({ src: '../../../../assets/images/demo/azteca_oro_600x800.jpg', thumb: '../../../../assets/images/demo/azteca_oro_600x800.jpg' }),
  //     new ImageItem({ src: '../../../../assets/images/demo/botella3.jpg', thumb: '../../../../assets/images/demo/botella3.jpg' }),
  //     new ImageItem({ src: '../../../../assets/images/demo/botella4.jpg', thumb: '../../../../assets/images/demo/botella4.jpg' }),
  //   ];
  // }

}
