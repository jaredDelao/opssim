import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, public modal: MatDialog) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      nombre: [null, Validators.required],
      apellidos: [null, Validators.required],
      correo: [null, Validators.required],
      password: [null, Validators.required],
      repeatPassword: [null, Validators.required],
    })
  }

  get nombre(): AbstractControl { return this.form.get('nombre'); }
  get apellidos(): AbstractControl { return this.form.get('nombre'); }
  get correo(): AbstractControl { return this.form.get('nombre'); }
  get password(): AbstractControl { return this.form.get('nombre'); }


}
