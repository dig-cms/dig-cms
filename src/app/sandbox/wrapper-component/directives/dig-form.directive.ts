import {Directive, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Directive({
  selector: '[digForm]'
})
export class DigFormDirective {
  @Input() digForm!: FormGroup;
  constructor() { }
}
