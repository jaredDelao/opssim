import { Component } from '@angular/core';
import { MenuSign } from '../models/enum.model';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../shared/@modals/signup/signup.component';
import { SigninComponent } from '../shared/@modals/signin/signin.component';

@Component({
  selector: 'app-pages',
  template: `
  
    <mat-toolbar class="toolbar-logo">
        <img class="toolbar-logo__img" src="../assets/images/logo-color.png" alt="laveronesaonline.com" routerLink="/">
    </mat-toolbar>

    <mat-toolbar class="toolbar-menu">
        <button class="toolbar-menu__button" mat-button *ngFor="let btn of buttons" [routerLink]="[btn.link]" routerLinkActive="router-link-active" >{{ btn.name | uppercase }}</button>
        
        <!-- menu user -->
        <button mat-button class="toolbar-menu__button" [matMenuTriggerFor]="beforeMenu">Before</button>
        <mat-menu #beforeMenu="matMenu" xPosition="before">
          <button mat-menu-item (click)="openModal('signIn')">Iniciar sesión</button>
          <button mat-menu-item (click)="openModal('signUp')">Registrarse</button>
        </mat-menu>
    </mat-toolbar>
    
    <router-outlet></router-outlet>

`,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  title = 'front-veronesa';

  buttons: Array<any> = [
    { path: '/productos', name: 'Productos', link: '/product-detail'},
    { path: '/paquetes', name: 'Paquetes', link: '/'},
    { path: '/ocasion', name: 'Para la ocasión', link: '/'},
    { path: '/contacto', name: 'Contactanos', link: '/'},
  ];

  constructor(public dialog: MatDialog) {}

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
}
