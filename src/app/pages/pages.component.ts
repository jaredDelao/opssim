import { Component, ViewChild, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { MenuSign } from '../models/enum.model';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../shared/@modals/signup/signup.component';
import { SigninComponent } from '../shared/@modals/signin/signin.component';
import { SidenavService } from '../services/sidenav.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html' ,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements AfterViewInit {

  @ViewChild('cart', {static: false}) btnCart: ElementRef<HTMLImageElement>

  buttons: Array<any> = [
    { path: '/productos', name: 'Productos', link: '/product-detail'},
    { path: '/paquetes', name: 'Paquetes', link: '/'},
    { path: '/ocasion', name: 'Para la ocasión', link: '/menu-ocasion'},
    { path: '/contacto', name: 'Contactanos', link: '/'},
  ];

  itemsDummy = [
    {name: 'Vodka Absolute Mango', category: 'Vodka', price: 100, stock: 3, description: 'description', img: [
      '../../assets/images/demo/botella1.jpg' 
    ] },
    {name: 'Rose Wines 750 ml', category: 'Tequila', price: 100, stock: 3, description: 'description', img: [
      '../../assets/images/demo/botella2.jpg'
    ] },
    {name: 'Lagar de Proventus', category: 'Vino tinto', price: 100, stock: 3, description: 'description', img: [
      '../../assets/images/demo/botella3.jpg'
    ] },
    {name: 'Jack Daniels', category: 'Whiskey', price: 100, stock: 3, description: 'description', img: [
      '../../assets/images/demo/botella4.jpg'
    ] },
  ]

  constructor(public dialog: MatDialog, private _sidenavService: SidenavService) {}

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

  ngAfterViewInit() {

  }


  toggleMenu() {
    this._sidenavService.openClose.next(true);
  }
}
