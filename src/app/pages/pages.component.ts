import { Component, ViewChild, ElementRef, AfterViewInit, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { MenuSign } from '../models/enum.model';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../shared/@modals/signup/signup.component';
import { SigninComponent } from '../shared/@modals/signin/signin.component';
import { SidenavService } from '../services/sidenav.service';
import { fromEvent, Subject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ItemCart, Product, Categoria } from '../models/products.model';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html' ,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit,AfterViewInit, OnDestroy {

  @ViewChild('cart', {static: false}) btnCart: ElementRef<HTMLImageElement>

  buttons: Array<any> = [
    // { path: '/productos', name: 'Productos', link: '/product-detail'},
    { path: '/paquetes', name: 'Paquetes', link: '/'},
    { path: '/ocasion', name: 'Para la ocasión', link: '/menu-ocasion'},
    { path: '/contacto', name: 'Contactanos', link: '/'},
  ];

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
  ];

  categoriesList: Categoria[] = [];

  $unsubscribe = new Subject();


  constructor(public dialog: MatDialog, private _sidenavService: SidenavService, 
    public _cartService: CartService, public _productsService: ProductsService,
    private router: Router) {}

  ngOnInit() {
    this.getCategories();
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.$unsubscribe.next(true);
    this.$unsubscribe.complete();
  }

  getCategories() {
    this._productsService.getCategorias().pipe(takeUntil(this.$unsubscribe)).subscribe(categorias => {
      this.categoriesList = categorias;
    })
  }

  openCategory(idTipo: number, idCategory: number) {
    this.router.navigate(['/products',idTipo,idCategory]);
  }

  openModal(type: 'signIn' | 'signUp') {

    if (type === MenuSign.registrarse) {
      const signupDialog = this.dialog.open(SignupComponent, {
        maxWidth: '600px',
      });

      signupDialog.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (type === MenuSign.iniciarSesion) {
      const signupDialog = this.dialog.open(SigninComponent, {
        maxWidth: '460px',
      });

      signupDialog.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  }

  deleteItem(item: Product) {
    this._cartService.removeFromCart(item);
  }


  toggleMenu() {
    this._sidenavService.openClose.next(true);
  }
}
