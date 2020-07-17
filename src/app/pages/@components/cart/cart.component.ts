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

  

  counter: Array<number> = [1,2,3,4];
  itemsCart: Array<ItemCart> | Array<any> = [];
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




  constructor(private fb: FormBuilder, private cartService: CartService) { }

  ngOnInit() {
    this.formInit();
    this.getItems();
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
    // this.cartService.getItems().subscribe((items: Array<any>) => {
      // this.itemsCart = items;

      // const count = items.length;
      const count = this.itemsDummy.length;
      // return;
      if (count == 0) return false;
      for(let i = 0; i < count; i++) {
        this.addSelectToForm(i, this.itemsDummy[i].stock);
      }
    // })
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
