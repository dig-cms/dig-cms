import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Directive({
  selector: '[digForm]'
})
export class DigFormDirective {
  @Input() digForm!: TemplateRef<any>;
  constructor() { }
}
