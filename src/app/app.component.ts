import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav', {static: false}) Sidenav: MatDrawer;
  buttons: Array<any> = [
    { path: '/productos', name: 'Productos', link: '/product-detail'},
    { path: '/paquetes', name: 'Paquetes', link: '/'},
    { path: '/ocasion', name: 'Para la ocasión', link: '/menu-ocasion'},
    // { path: '/contacto', name: 'Contáctanos', link: '/'},
  ];

  constructor(private _sidenavService: SidenavService) {} 

  ngOnInit(): void {}
  
  ngAfterViewInit() {
    this._sidenavService.$openClose.subscribe((resp: boolean) => {
      return this.Sidenav.toggle();
    })
  }

  // buttons: Array<any> = [
  //   { path: '/productos', name: 'Productos'},
  //   { path: '/paquetes', name: 'Paquetes'},
  //   { path: '/ocasion', name: 'Para la ocasión'},
  //   { path: '/contacto', name: 'Contactanos'},
  // ]
}
