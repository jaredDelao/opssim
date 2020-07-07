import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {

  form: FormGroup;

  controlGroupToggle = new FormControl('fisica')

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      nombre: [null, Validators.required],
      rfc: [null, Validators.required],
      uso: [null, Validators.required],
    })
  }

}
