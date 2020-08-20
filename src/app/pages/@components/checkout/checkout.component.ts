import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ItemCart } from 'src/app/models/products.model';
import { Observable } from 'rxjs';
import { CreateOrder } from 'src/app/models/order.model';
import { switchMap } from 'rxjs/operators';
import { OrderService } from 'src/app/services/order.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/models/address.model';
import { MatDialog } from '@angular/material';
import { SelectAddressModalComponent } from '../../@components-logged/@modals/select-address-modal/select-address-modal.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  formPersonal: FormGroup;
  formDirection: FormGroup;
  formComplement: FormGroup;

  isLogged: boolean = true;

  addressDefault: Address;
  idAddress: string = null;

  constructor(private fb: FormBuilder, private _cartService: CartService, private _orderService: OrderService,
    private _addressService: AddressService, public dialog: MatDialog) { }

  ngOnInit() {
    this.formInit();
    this.getAddressDefault();

    // this._wishlistService.addWishlist('1').subscribe(console.log)
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
        return this._orderService.createOrder(base64)
      })).subscribe((resp) => {
      if (resp.iResultado == 'Ok') {
        alert('Pedido creado')
      }
    }, (err) => alert(err)) 
  }


  getAddressDefault() {
    this._addressService.getAddress().subscribe((resp) => {
      if (resp.length > 0) {
        this.addressDefault = resp[0];
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SelectAddressModalComponent, {
      maxWidth: '700px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.idAddress = result;
    });
  }

}
