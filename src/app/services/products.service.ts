import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pluck, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  productsList(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.url + 'productos').pipe(
      pluck('resultDto', 'sDetalle'),
      catchError<Product[], Observable<Product[]>>(err => of([]))
    )
  }
}
