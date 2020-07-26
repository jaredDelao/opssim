import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url: string = ''

  constructor(public http: HttpClient) { }

  test() {
    return this.http.get(environment.url + 'productos')
  }
  
}
