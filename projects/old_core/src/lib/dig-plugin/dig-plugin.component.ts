import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DigFormComponent} from './dig-form/dig-form.component';
import {DigTemplateComponent} from './dig-template/dig-template.component';
import {DigDocComponent} from './dig-doc/dig-doc.component';
import {DigPluginView} from './dig-plugin';

@Component({
  selector: 'dig-plugin',
  templateUrl: './dig-plugin.component.html',
  styleUrls: ['./dig-plugin.component.scss']
})
export class DigPluginComponent implements OnInit, OnChanges {
  @Input() uid!: string;

  @Input() view: DigPluginView = DigPluginView.template;

  @ViewChild(DigFormComponent, {static: true}) formRef!: DigFormComponent;
  @ViewChild(DigTemplateComponent, {static: true}) templateRef!: DigTemplateComponent;
  @ViewChild(DigDocComponent, {static: true}) docRef!: DigDocComponent;

  private ready = false;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['view']) {
      this.setView(changes['view'].currentValue)
    }
  }

  setView(view: DigPluginView) {
    this.viewContainerRef.clear();
    const ref = this.getViewRef(view);
    this.viewContainerRef.createEmbeddedView(ref.template);
  }

  getViewRef(view: DigPluginView) {
    return {
      [DigPluginView.form]: this.formRef,
      [DigPluginView.template]: this.templateRef,
      [DigPluginView.doc]: this.docRef,
    }[view];
  }

}
