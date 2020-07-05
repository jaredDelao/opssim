import { Component } from '@angular/core';
import { MenuSign } from '../models/enum.model';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../shared/@modals/signup/signup.component';

@Component({
  selector: 'app-pages',
  template: `
  
    <mat-toolbar class="toolbar-logo">
        <img class="toolbar-logo__img" src="../assets/images/logo-color.png" alt="laveronesaonline.com">
    </mat-toolbar>

    <mat-toolbar class="toolbar-menu">
        <button class="toolbar-menu__button" mat-button *ngFor="let btn of buttons">{{ btn.name | uppercase }}</button>
        
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
    { path: '/productos', name: 'Productos'},
    { path: '/paquetes', name: 'Paquetes'},
    { path: '/ocasion', name: 'Para la ocasión'},
    { path: '/contacto', name: 'Contactanos'},
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

  }
}
