import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[dig-doc]'
})
export class DigDocDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
