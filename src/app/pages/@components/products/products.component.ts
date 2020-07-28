import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, ItemCart } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  // Lists
  productosList: Array<Product> = [];

  $subscription = new Subject();

  constructor(private cartService: CartService, public productsService: ProductsService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: {idTipo: number, idCategory: number}) => {
      this.getProducts(params.idTipo, params.idCategory);
    })
  }

  ngOnDestroy() {
    this.$subscription.next(true);
    this.$subscription.complete();
  }

  getProducts(idTipo: number, idCategory: number) {
    this.productsService.getProductsByTipoAndByCategory(idTipo, idCategory).pipe(
      takeUntil(this.$subscription)
    ).subscribe((resp) => {
      this.productosList = resp;
    })
  }

  verProducto(id: number){
    this.router.navigate(['/product-detail', id]);
  }

  addToCart(cartItem: Product, quantity: number = 1) {
    if (quantity <= 0 || !cartItem) return false;
    const cart: ItemCart | boolean = this.cartService.addToCart(cartItem, quantity);
    console.log(cart);
  }

}
