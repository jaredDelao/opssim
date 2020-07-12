import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  openClose = new Subject();
  $openClose = this.openClose.asObservable();

  constructor() { }
}
