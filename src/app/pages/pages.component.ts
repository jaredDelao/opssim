import { Component } from '@angular/core';
import { MenuSign } from '../models/enum.model';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../shared/@modals/signup/signup.component';
import { SigninComponent } from '../shared/@modals/signin/signin.component';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-pages',
  template: `
  
    <mat-toolbar class="toolbar-logo">
        <img class="toolbar-logo__img" src="../assets/images/logo-color.png" alt="laveronesaonline.com" routerLink="/">
    </mat-toolbar>

    <mat-toolbar class="toolbar-menu">

      <div class="toolbar-menu__left"> </div>

      <div class="toolbar-menu__center">
        <button class="toolbar-menu__button" mat-button *ngFor="let btn of buttons" [routerLink]="[btn.link]" routerLinkActive="router-link-active" >{{ btn.name | uppercase }}</button>
      </div>

      <div class="toolbar-menu__right">
        <!-- menu user -->
        <!-- <button mat-button class="toolbar-menu__button" [matMenuTriggerFor]="beforeMenu">Before</button> -->

        <img matRipple src="../../assets/images/svg/user.svg" [matMenuTriggerFor]="beforeMenu">
        <img matRipple src="../../assets/images/svg/cart-white.svg">

        <mat-menu #beforeMenu="matMenu" xPosition="before">
          <button mat-menu-item (click)="openModal('signIn')">Iniciar sesión</button>
          <button mat-menu-item (click)="openModal('signUp')">Registrarse</button>
        </mat-menu>
      </div>

    </mat-toolbar>

    <mat-toolbar class="toolbar-menu-responsive">

        <button mat-icon-button (click)="toggleMenu()">
          <mat-icon>menu</mat-icon>
        </button>

        <div class="toolbar-menu-responsive__actions">
          <img matRipple src="../../assets/images/svg/user.svg" [matMenuTriggerFor]="beforeMenu">
          <img matRipple src="../../assets/images/svg/cart-white.svg">

          <mat-menu #beforeMenu="matMenu" xPosition="before">
            <button mat-menu-item (click)="openModal('signIn')">Iniciar sesión</button>
            <button mat-menu-item (click)="openModal('signUp')">Registrarse</button>
          </mat-menu>
        </div>

    </mat-toolbar>
    
    <router-outlet></router-outlet>

`,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  buttons: Array<any> = [
    { path: '/productos', name: 'Productos', link: '/product-detail'},
    { path: '/paquetes', name: 'Paquetes', link: '/'},
    { path: '/ocasion', name: 'Para la ocasión', link: '/menu-ocasion'},
    { path: '/contacto', name: 'Contactanos', link: '/'},
  ];

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


  toggleMenu() {
    this._sidenavService.openClose.next(true);
  }
}
