import { Component, OnInit } from '@angular/core';
import { Product, ItemCart } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Lists
  productosList: Array<Product> = [];

  constructor(private cartService: CartService, public productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.productsList().subscribe((resp: Product[]) => {
      this.productosList = resp;
    })
  }


  addToCart(cartItem: Product, quantity: number = 1) {
    if (quantity <= 0 || !cartItem) return false;
    const cart: ItemCart | boolean = this.cartService.addToCart(cartItem, quantity);
    console.log(cart);
  }

}
