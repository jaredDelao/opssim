import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ItemCart, Product } from 'src/app/models/products.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  form: FormGroup;

  counter: Array<number> = [1,2,3,4];
  selectNumer: boolean = false;

  itemsDummy = [
    {name: 'Don Pedro', category: 'Brandy', price: 100, stock: 1, description: 'description', img: [
      '../../../../assets/images/demo/DonPedroGranRva600x800.jpg' 
    ] },
    {name: 'Azteca de Oro', category: 'Brandy', price: 200, stock: 1, description: 'description', img: [
      '../../../../assets/images/demo/azteca_oro_600x800.jpg'
    ] },
    {name: 'Lagar de Proventus', category: 'Vino tinto', price: 600, stock: 1, description: 'description', img: [
      '../../../../assets/images/demo/botella3.jpg'
    ] },
    {name: 'Jack Daniels', category: 'Whiskey', price: 300, stock: 1, description: 'description', img: [
      '../../../../assets/images/demo/botella4.jpg'
    ] },
  ]

  $unsubscribe = new Subject();
  totalAmount: number = 0;


  constructor(private fb: FormBuilder, public _cartService: CartService) { }

  ngOnInit() {
    this.formInit();
    this.getItems();
  }


  formInit() {
    this.form = this.fb.group({});
  }

  ngOnDestroy() {
    this.$unsubscribe.next(true);
    this.$unsubscribe.complete();
  }

  // Create control
  addSelectToForm(i, value) {
    let control: FormControl = new FormControl(value);
    this.form.setControl(`controlItem${i}`, control)
  }

  getCounter() {
    for(let i=1; i<=8; i++) {
      this.counter.push(i);
    }
  }
  getItems() {
    this._cartService.getItems().pipe(takeUntil(this.$unsubscribe)).subscribe((items) => {
      items.forEach((v, i) => {
        this.addSelectToForm(i, v.quantity);
      })      
    });    
  }
  
  updateQuantity(item: Product, quantity: number | string) {
    quantity = Number(quantity);
    let resp = this._cartService.setQuantityItem(item, quantity)
  }

  // Remove cart items
  removeItem(item: Product, i) {
    this._cartService.removeFromCart(item);
    console.log(this.form);
    this.form.removeControl(`controlItem${i}`)
  }

  deleteItem(item: Product) {
    this._cartService.removeFromCart(item);
  }

  resetCart() {
    this._cartService.resetCart();
  }

}
