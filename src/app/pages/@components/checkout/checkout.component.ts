import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ItemCart } from 'src/app/models/products.model';
import { Observable } from 'rxjs';
import { CreateOrder } from 'src/app/models/order.model';
import { switchMap } from 'rxjs/operators';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  formPersonal: FormGroup;
  formDirection: FormGroup;
  formComplement: FormGroup;

  constructor(private fb: FormBuilder, private _cartService: CartService, private _orderService: OrderService) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {

    this.formPersonal = this.fb.group({
      nombre: [null],
      apellido: [null],
      telefono: [null],
      email: [null],
    });

    this.formDirection = this.fb.group({
      calle: [null],
      noInterno: [null],
      noExterno: [null],
      delegacion: [null],
      cp: [null],
    });

    this.formComplement = this.fb.group({
      referencia: [null],
      indicacion: [null],
      receptor: [null],
    });

  }


  get getProducts(): Observable<ItemCart[]>  {
    return this._cartService.getItems();
  }

  get getTotalCart(): Observable<number> {
    return this._cartService.getTotalAmount();
  }

  async confirmOrder() {
    const products: Array<ItemCart> = await this.getProducts.toPromise();
    
    this._cartService.getTotalAmount().pipe(
      switchMap((total: number) => {
        let order = new CreateOrder(1, 'José', total, products);
        const base64 = btoa(JSON.stringify(order));
        return this._orderService.createOrder('1', base64)
      })
    ).subscribe((resp) => {
      
      console.log(resp);
      
      
    })

    
  }

}
