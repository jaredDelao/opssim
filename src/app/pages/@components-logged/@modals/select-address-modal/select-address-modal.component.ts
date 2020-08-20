import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/models/address.model';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-select-address-modal',
  templateUrl: './select-address-modal.component.html',
  styleUrls: ['./select-address-modal.component.scss']
})
export class SelectAddressModalComponent implements OnInit {

  addressList: Address[] = [];

  constructor(private _addressService: AddressService, public dialogRef: MatDialogRef<SelectAddressModalComponent>) { }

  ngOnInit() {
    this.getAddress();
  }

  getAddress() {
    this._addressService.getAddress().subscribe((resp) => {
      if (resp.length > 0) {
        this.addressList = resp;
      }
    })
  }

}
