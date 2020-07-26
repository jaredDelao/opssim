import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscriber, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product, ItemCart } from '../models/products.model';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

const products = JSON.parse(localStorage.getItem('cart')) || [];

@Injectable({
  providedIn: 'root'
})
export class CartService {

  counterCart: BehaviorSubject<number> = new BehaviorSubject(0);
  $counterCart = this.counterCart.asObservable();

  cartItems: BehaviorSubject<any[]> = new BehaviorSubject([]);
  observer: Subscriber<{}>;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.cartItems.subscribe(_products => _products = products);

    console.log('localStorage::',products);
    
  }

  public getItems(): Observable<ItemCart[]> {
    return of(products)
  }

  addToCart(itemCart: Product, quantity: number): ItemCart | boolean {
    let item: ItemCart | boolean = false;
    // If Products exist
    debugger
    const productExist = products.find((items, index) => {
      if (items.itemCart.iIdProducto === itemCart.iIdProducto) {
        const qty = products[index].quantity + quantity;
        const stock = this.calculateStockCounts(products[index], quantity);
          if (qty !== 0 && stock) {
              products[index].quantity = qty;
              this.openSnackBar('Se añadió al carrito', 'cerrar');
          }
        return true;
      }
    });
      // If Products does not exist (Add New Products)
    if (!productExist) {
      item = { itemCart, quantity };
      products.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(products));
    return products;
  }

  addToCartFromDetails(itemCart: Product, quantity: number): ItemCart | boolean {
    let item: ItemCart | boolean = false;
    // If Products exist
    const productExist = products.find((items, index) => {
      if (items.itemCart.iIdProducto === itemCart.iIdProducto) {
        const qty = quantity;
          if (qty !== 0) {
              products[index].quantity = qty;
              this.openSnackBar('se añadió al carrito', 'cerrar');
          }
        return true;
      }
    });
      // If Products does not exist (Add New Products)
    if (!productExist) {
      item = { itemCart, quantity };
      products.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(products));
    return products;
  }

  // Calculate Product stock Counts
  calculateStockCounts(product: any, quantity): any | Boolean {
    const qty = product.quantity + quantity;
    const stock = product.itemCart.stock;
    console.log(stock, qty);
    
    if (stock < qty) {
        alert('No puedes añadir mas productos de los que hay en stock');
        return false;
    }
    return true;
  }

  // Update Cart Value
  public updateCartQuantity(product: Product, quantity: number): ItemCart | boolean {
    return products.find((items, index) => {
       if (items.itemCart.iIdProducto == product.iIdProducto) {
           const qty = products[index].quantity + quantity;
           const stock = this.calculateStockCounts(products[index], quantity);
           if (qty !== 0 && stock) {
               products[index].quantity = qty;
           }
           localStorage.setItem('cart', JSON.stringify(products));
           return true;
       }
    });
  }


  // Set quantity Cart Value
  public setQuantityItem(product: Product, quantity: number): ItemCart | boolean {
    return products.find((items, index) => {
       if (items.itemCart.iIdProducto == product.iIdProducto) {
           const qty = quantity;
          //  const stock = this.calculateStockCounts(products[index], quantity);
           if (qty !== 0) {
               products[index].quantity = qty;
           }
           localStorage.setItem('cart', JSON.stringify(products));
           return true;
       }
    });
  }

  // Removed in cart
  public removeFromCart(item: Product) {
    if (!item || item === undefined) return false;
    var index: number = null;
    
    products.findIndex((element: ItemCart, i) => {
      if (element.itemCart.iIdProducto.toString() == item.iIdProducto.toString()) index = i;
    })

    products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(products));
  }

  getCartById(): Observable<any> {
    let idUser = localStorage.getItem('idUser');
    return this.http.get(environment.url + 'cart/getCartByUserId/'+idUser);
  }

  getCounterItems(): Observable<Array<ItemCart>> {
    return of(products.length);
  }

  // Total amount
  getTotalAmount(): Observable<number> {
    return this.cartItems.pipe(map((product: ItemCart[]) => {
        return products.reduce((prev, curr: ItemCart) => {
            return prev + curr.itemCart.dPrecioUnitario * curr.quantity;
        }, 0);
  }));
  }
  
  updateCounterCart() {
  
  }



  // Snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
