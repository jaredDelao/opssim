import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import * as cryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, public modal: MatDialog, public _userService: UserService) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      sCorreoElectronico: [null, Validators.required],
      sPassword: [null, Validators.required],
    })
  }

  get correo(): AbstractControl { return this.form.get('sCorreoElectronico'); }
  get password(): AbstractControl { return this.form.get('sPassword'); }


  ingresar() {
    this._userService.signIn(this.form.getRawValue()).subscribe((resp) => {
      console.log(resp);
      const { iIdUsuario, sToken, error } = resp;

      if (error) return alert('Ha ocurrido un error, vuelve a intentarlo');

      if (iIdUsuario === 0) {
        return alert('Las credenciales son incorrectas');
      }
      let idUsuarioEncrypt = cryptoJS.AES.encrypt(iIdUsuario.toString(), environment.secretKey).toString();

      localStorage.setItem('token', sToken);
      localStorage.setItem('idUsuario', idUsuarioEncrypt);

    })
  }



}
