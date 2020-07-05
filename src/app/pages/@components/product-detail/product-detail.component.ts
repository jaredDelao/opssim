import { Component, OnInit } from '@angular/core';

import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  images: GalleryItem[];

  constructor() { }

  ngOnInit() {
    this.setImages();
  }

  setImages() {
    this.images = [
      new ImageItem({ src: '../../../../assets/images/demo/botella1.jpg', thumb: '../../../../assets/images/demo/botella1.jpg' }),
      new ImageItem({ src: '../../../../assets/images/demo/botella2.jpg', thumb: '../../../../assets/images/demo/botella2.jpg' }),
      new ImageItem({ src: '../../../../assets/images/demo/botella3.jpg', thumb: '../../../../assets/images/demo/botella3.jpg' }),
      new ImageItem({ src: '../../../../assets/images/demo/botella4.jpg', thumb: '../../../../assets/images/demo/botella4.jpg' }),
    ];
  }

}
