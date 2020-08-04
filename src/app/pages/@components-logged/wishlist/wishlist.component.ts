// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-wishlist',
//   templateUrl: './wishlist.component.html',
//   styleUrls: ['./wishlist.component.scss']
// })
// export class WishlistComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ItemCart, Product } from 'src/app/models/products.model';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  form: FormGroup;

  counter: Array<number> = [1,2,3,4];
  itemsCart: Array<ItemCart> | Array<any> = [];
  selectNumer: boolean = false;

  itemsDummy = [
    {name: 'Vodka Absolute Mango', category: 'Vodka', price: 100, stock: 3, description: 'description', img: [
      '../../../../assets/images/demo/botella1.jpg' 
    ] },
    {name: 'Rose Wines 750 ml', category: 'Tequila', price: 100, stock: 3, description: 'description', img: [
      '../../../../assets/images/demo/botella2.jpg'
    ] },
    {name: 'Lagar de Proventus', category: 'Vino tinto', price: 100, stock: 3, description: 'description', img: [
      '../../../../assets/images/demo/botella3.jpg'
    ] },
    {name: 'Jack Daniels', category: 'Whiskey', price: 100, stock: 3, description: 'description', img: [
      '../../../../assets/images/demo/botella4.jpg'
    ] },
  ];

  items: Array<Product> = [];


  constructor(public _wishlistService: WishlistService) { }

  ngOnInit() {
    this.getItems();
  }

  // Get list items from WishList
  getItems() {
    this._wishlistService.getWishlist().subscribe(resp => {
      this.items = resp;
    })
  }

  // Remove cart items
  removeItem(item: Product) {
    this._wishlistService.deleteWishlist(String(item.iIdProducto));
    console.log(this.form);
  }

}

