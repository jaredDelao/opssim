import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  formPersonal: FormGroup;
  formDirection: FormGroup;
  formComplement: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {

    this.formPersonal = this.fb.group({
      nombre: [null],
      apellido: [null],
      telefono: [null],
      email: [null],
    });

    this.formDirection = this.fb.group({
      calle: [null],
      noInterno: [null],
      noExterno: [null],
      delegacion: [null],
      cp: [null],
    });

    this.formComplement = this.fb.group({
      referencia: [null],
      indicacion: [null],
      receptor: [null],
    });

  }

}
