import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {

  constructor(private readonly control: NgControl) { }

  @HostListener('input', ['$event'])
  public onInput(event): void {
    this.control.control.setValue(event.target.value.toUpperCase());
  }

}
