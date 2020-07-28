import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pluck, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Product, Categoria } from '../models/products.model';

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

  getProductsByTipoAndByCategory(tipo: number, category: number): Observable<Product[]> {
    return this.http.get<Product[]>(environment.url + `productos?iTipoProducto=${tipo}&iCategoria=${category}`).pipe(
      pluck('resultDto', 'sDetalle'),
      catchError<Product[], Observable<Product[]>>(err => of([]))
    )
  }

  getProductById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(environment.url + `producto?idProducto=${id}`).pipe(
      pluck('resultDto', 'sDetalle'),
      catchError<Product[], Observable<Product[]>>((err) => of([]))
    )
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(environment.url + 'categorias').pipe(
      pluck('resultDto', 'sDetalle'),
      catchError<Categoria[], Observable<Categoria[]>>((err) => of([]))
    )
  }
}
