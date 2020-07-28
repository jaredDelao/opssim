import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signIn } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hhtp: HttpClient) { }


  signIn(req: signIn): Observable<any> {
    return this.hhtp.get(environment.url + `login?sCorreoElectronico=${req.sCorreoElectronico}&sPassword=${req.sPassword}`)
  }

  signUp(req: signIn): Observable<any> {
    return this.hhtp.get(environment.url + `creaCliente?sCorreoElectronico=${req.sCorreoElectronico}&sPassword=${req.sPassword}`)
  }
}
