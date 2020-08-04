import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signIn, SignInResponse } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';
import * as cryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  signIn(req: signIn): Observable<SignInResponse> {
    return this.http.get(environment.url + `login?sCorreoElectronico=${req.sCorreoElectronico}&sPassword=${req.sPassword}`).pipe(
      pluck('resultDto', 'sDetalle'),
      catchError<SignInResponse, Observable<SignInResponse>>((error) => of({
        iEstatus: null,
        iIdUsuario: 0,
        iTipoRedSocial: null,
        sCorreoElectronico: null,
        sIdRedSocial: null,
        sPassword: null,
        sToken: null,
        error: error
      }))
    )
  }

  signUp(req: signIn): Observable<any> {
    return this.http.get(environment.url + `creaCliente?sCorreoElectronico=${req.sCorreoElectronico}&sPassword=${req.sPassword}`)
  }

  desencriptar(code: string) {
    let bytes = cryptoJS.AES.decrypt(code, environment.secretKey);
    let ci = bytes.toString(cryptoJS.enc.Utf8);
    return ci;
  }

  getIdUser() {
    let idCliente = localStorage.getItem('idUsuario');
    let bytes = idCliente ? cryptoJS.AES.decrypt(idCliente, environment.secretKey) : null;
    if (bytes) {
      let idClienteResult = bytes.toString(cryptoJS.enc.Utf8);
      return idClienteResult;
    }
    alert('No existe usuario loggeado');
    return false;
  }
}
