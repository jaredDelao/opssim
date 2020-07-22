import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url: string = ''

  constructor(public http: HttpClient) { }

  test() {
    return this.http.get('http://34.234.225.159:8080/RestFull_ECOMMERCE-1.0/rest/ECOMMERCE/productos')
  }
  
}
