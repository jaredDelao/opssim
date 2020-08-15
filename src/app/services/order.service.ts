import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { OrderResponse, Order } from '../models/order.model';
import { pluck, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  // {
  //   "iIdDireccion": 1,
  //   "sPersonaRecibe": "Juan perez;",
  //   "dTotal": 150,
  //   "ItemsCart": [{
  //     "dPrecioUnitario": 100,
  //     "iIdProducto": 1,
  //     "dCantidad": 1,
  //     "dPrecio": 100,
  //     "dTasaIva": 0.16
  //   }, {
  //     "dPrecioUnitario": 50,
  //     "iIdProducto": 2,
  //     "dCantidad": 1,
  //     "dPrecio": 50,
  //     "dTasaIva": 0.16
  //   }]
  
  // }

  createOrder(idCliente: string, pedido: string): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(environment.url + `CreaPedido?iIdCliente=${idCliente}&sDetallePedido=${pedido}`, {}).pipe(
      pluck('resultDto'),
      catchError<OrderResponse, Observable<OrderResponse>>((e) => of({iResultado: false, sDetalle: null}))
    )
  }

  getOrder(idCliente: string): Observable<Order[]> {
    return this.http.get<Order[]>(environment.url + `GetPedidosCte?iIdCliente=${idCliente}`).pipe(
      pluck('resultDto', 'sDetalle'),
      catchError<Order[], Observable<Order[]>>((e) => of([]))
    )
  }

}
