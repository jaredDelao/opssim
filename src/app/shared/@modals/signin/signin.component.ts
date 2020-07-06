import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, public modal: MatDialog) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      correo: [null, Validators.required],
      password: [null, Validators.required],
    })
  }
  get correo(): AbstractControl { return this.form.get('correo'); }
  get password(): AbstractControl { return this.form.get('password'); }



}
