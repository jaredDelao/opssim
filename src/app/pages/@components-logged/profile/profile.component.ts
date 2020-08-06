import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('inputName', {static: false}) inputName: ElementRef<HTMLInputElement>;
  @ViewChild('inputMail', {static: false}) inputMail: ElementRef<HTMLInputElement>;
  @ViewChild('inputTelefono', {static: false}) inputTelefono: ElementRef<HTMLInputElement>;
  @ViewChild('inputPassword', {static: false}) inputPassword: ElementRef<HTMLInputElement>;

  Fnombre: boolean = false;
  Fcorreo: boolean = false;
  Ftelefono: boolean = false;
  Fpassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editField(param: string, input: string) {

    if (this[param] === false) {
      this[param] = true;
      setTimeout(() => {
        this[input].nativeElement.select();
      },100)
    } else {
      this[param] = false;
    }
  }

}
