import {
  AfterViewInit, ComponentRef,
  ContentChild,
  Directive,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DigFormDirective} from './dig-form.directive';
import {DigTemplateDirective} from './dig-template.directive';
import {DigDocDirective} from './dig-doc.directive';
import {DigComponent} from '../dig/dig.component';

@Directive({
  selector: '[dig]'
})
export class DigDirective implements AfterViewInit {
  @Input() dig!: string | string[];
  @ViewChild(DigFormDirective, {static: true}) formRef!: DigFormDirective;
  @ViewChild(DigTemplateDirective, {static: true}) templateRef!: DigTemplateDirective;
  @ContentChild(DigDocDirective) docRef!: DigDocDirective;
  constructor(private component: ComponentRef<DigComponent>) {
  }

  ngAfterViewInit(): void {
  }

}
