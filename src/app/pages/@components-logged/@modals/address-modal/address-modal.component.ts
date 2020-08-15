import { Component, OnInit, Inject, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AddressService } from 'src/app/services/address.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { debounceTime } from 'rxjs/operators';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent implements OnInit, AfterViewInit, OnDestroy {

  form: FormGroup;

  edit: boolean = false;

  catalogoCP: Array<Address> = [];

  $unsubscribe = new Subject();

  constructor(public dialogRef: MatDialogRef<AddressModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idAddress: string}, private fb: FormBuilder, public _addressService: AddressService) { }

  ngOnInit() {
    this.formInit();
    this.createOrEdit();
  }

  ngAfterViewInit() {
    this.form.get('iCodigoPostal').valueChanges.pipe(
      takeUntil(this.$unsubscribe),
      debounceTime(500)
      ).subscribe((cp: string) => {
        this._addressService.getCp(cp).subscribe((resp) => {
          if (resp.length <= 0) return;
          this.catalogoCP = resp;
          this.form.patchValue({
            sDelegacion: resp[0].sDelegacion,
            sEstado: resp[0].sEstado,
          })
        });
    })

  }

  ngOnDestroy() {
    this.$unsubscribe.next(true);
    this.$unsubscribe.complete();
  }

  formInit() {
    this.form = this.fb.group({
      sCalle: ['', Validators.required],
      sNumeroExterior: [null, Validators.required],
      sNumeroInterior: [''],
      sColonia: ['', Validators.required],
      sDelegacion: ['', Validators.required],
      sEstado: ['', Validators.required],
      iCodigoPostal: ['', Validators.required],
    })
  }

  // Verifica si es crear o editar direccion
  createOrEdit() {
    this.data.idAddress ? this.edit = true : this.edit = false;
  }

  cancel() {
    this.dialogRef.close();
  }

  agregar() {
    let req = this.form.getRawValue();
    this._addressService.createAddress(req).subscribe((resp) => {
      console.log(resp);
      if (resp.iResultado == 'Ok') {
        this.dialogRef.close({ok: true});
      }
    })
  }

}
