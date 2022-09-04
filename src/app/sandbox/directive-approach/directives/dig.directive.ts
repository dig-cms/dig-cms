import {
  AfterViewInit,
  ContentChild,
  Directive,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DigFormDirective} from './dig-form.directive';
import {DigTemplateDirective} from './dig-template.directive';
import {DigDocDirective} from './dig-doc.directive';
import {DigDocComponent} from '../dig-doc/dig-doc.component';

@Directive({
  selector: '[dig]'
})
export class DigDirective implements AfterViewInit {
  @Input() dig!: string | string[];
  @ViewChild(DigFormDirective, {static: true}) formRef!: DigFormDirective;
  @ViewChild(DigTemplateDirective, {static: true}) templateRef!: DigTemplateDirective;
  @ContentChild(DigDocDirective) docRef!: DigDocDirective;
  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit(): void {
    this.showDoc();
  }

  showDoc() {
    console.log('show doc', this.docRef);
    if (! this.docRef?.templateRef) {
      return;
    }
    this.viewContainerRef.clear();
    const doc = this.viewContainerRef.createComponent(DigDocComponent);
    doc.instance.template = this.docRef.templateRef;
  }
}
