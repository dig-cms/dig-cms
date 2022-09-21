import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[dig]'
})
export class DigDirective {
  @Input() dig!: string;
  constructor() { }

  get uid() {
    return this.dig;
  }

}
