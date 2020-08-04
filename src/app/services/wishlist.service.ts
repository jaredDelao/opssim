import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { Product } from '../models/products.model';
import { pluck, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient, private _userService: UserService) { }

  getWishlist(): Observable<Product[] | []> {
    let idUser = this._userService.getIdUser();
    console.log(idUser);
    if (!idUser) return;
    return this.http.get(environment.url + `GetWishlist?iIdCliente=${idUser}`).pipe(
      pluck('resultDto', 'sDetalle'),
      catchError<[], Observable<[]>>((err) => of([]))
    )
  }

  addWishlist(idProduct: string) {
    let idUser = this._userService.getIdUser();
    if (!idUser) return;
    return this.http.put(environment.url + `AgregaWishlist?iIdCliente=${idUser}&iIdProducto=${idProduct}`, {})
  }

  deleteWishlist(idProduct: string) {
    let idUser = this._userService.getIdUser();
    if (!idUser) return;
    return this.http.delete(environment.url + `EliminaWishlist?iIdCliente=${idUser}&iIdProducto=${idProduct}`)
  }
}
