import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/models/address.model';
import { MatDialog } from '@angular/material/dialog';
import { AddressModalComponent } from '../@modals/address-modal/address-modal.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(public _addressService: AddressService, public dialog: MatDialog) { }

  adressList: Array<Address> = [];

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    this._addressService.getAddress().subscribe((resp) => {
      if (resp.length <= 0) return alert ('No se encontraron direcciones')
      this.adressList = resp;
    })
  }

  openDialog(idAddress?) {
    const dialogRef = this.dialog.open(AddressModalComponent, {
      maxWidth: '700px',
      data: {idAddress: idAddress ? idAddress : null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.ok) {
        if (result.ok) {
          this.getAddress();
        }
      }
    });
  }

}
