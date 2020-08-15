import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrderResponse } from '../models/order.model';
import { Observable, of } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { Address } from '../models/address.model';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient, private _userService: UserService) { }

  createAddress(address): Observable<OrderResponse> {
    const idUsuario = this._userService.getIdUser();
    const { sCalle, sNumeroExterior, sNumeroInterior, sColonia, sDelegacion, sEstado, iCodigoPostal } = address;
    return this.http.get(environment.url + `CreaDireccion?iIdUsuario=${idUsuario}&sCalle=${sCalle}&sNumeroExterior=${sNumeroExterior}
      &sNumeroInterior=${sNumeroInterior}&sColonia=${sColonia}&sDelegacion=${sDelegacion}&sEstado=${sEstado}&iCodigoPostal=${iCodigoPostal}`)
      .pipe(pluck('resultDto'))
  }

  getAddress(): Observable<Address[]> {
    const idUsuario = this._userService.getIdUser();
    return this.http.get<Address[]>(environment.url + `direccion?iIdUsuario=${idUsuario}`).pipe(
      pluck('resultDto','sDetalle'),
      catchError<any[], Observable<any[]>>((err) => of([]))
    )
  }

  getCp(cp: string): Observable<Address[]> {
    return this.http.get<Address[]>(environment.url + `cp?iCodigoPostal=${cp}`).pipe(
      pluck('resultDto','sDetalle'),
      catchError<any[], Observable<any[]>>((err) => of([]))
    )
  }
  
}
