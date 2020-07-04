import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ItemCart, Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  form: FormGroup;

  counter: Array<number> = [];
  itemsCart: Array<ItemCart> | Array<any> = [];
  selectNumer: boolean = false;


  constructor(private fb: FormBuilder, private cartService: CartService) { }

  ngOnInit() {
    this.formInit();
  }


  formInit() {
    this.form = this.fb.group({});
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
    this.cartService.getItems().subscribe((items: Array<ItemCart>) => {
      this.itemsCart = items;

      const count = items.length;
      // return;
      if (count == 0) return false;
      for(let i = 0; i < count; i++) {
        this.addSelectToForm(i, items[i].quantity);
      }
    })
  }

  setQuantityItem(product: Product, quantity: number) {
    let resp = this.cartService.setQuantityItem(product, quantity);
    console.log(resp);
  }

  // Remove cart items
  removeItem(item, i) {
    this.cartService.removeFromCart(item);
    console.log(this.form);
    this.form.removeControl(`controlItem${i}`)
  }

  getTotal() {
    return this.cartService.getTotalAmount();
  }

}
