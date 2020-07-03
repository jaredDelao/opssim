import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-veronesa';

  buttons: Array<any> = [
    { path: '/productos', name: 'Productos'},
    { path: '/paquetes', name: 'Paquetes'},
    { path: '/ocasion', name: 'Para la ocasión'},
    { path: '/contacto', name: 'Contactanos'},
  ]
}
