import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  
    <mat-toolbar class="toolbar-logo">
        <img class="toolbar-logo__img" src="../assets/images/logo-color.png" alt="laveronesaonline.com">
    </mat-toolbar>

    <mat-toolbar class="toolbar-menu">
        <button class="toolbar-menu__button" mat-button *ngFor="let btn of buttons">{{ btn.name | uppercase }}</button>
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
  ]
}
