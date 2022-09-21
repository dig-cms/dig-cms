import { AfterContentInit, Component, ContentChild, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DigPluginContentComponent } from './dig-plugin-content/dig-plugin-content.component';
import { DigPluginFormComponent } from './dig-plugin-form/dig-plugin-form.component';

export enum DigPluginView{
  content = 'CONTENT',
  form = 'FORM',
  doc = 'DOC'
};
export enum DigPluginScope{
  page = 'PAGE',
  global = 'GLOBAL',
};

@Component({
  selector: 'app-dig-plugin',
  templateUrl: './dig-plugin.component.html',
  styleUrls: ['./dig-plugin.component.scss']
})
export class DigPluginComponent implements OnInit, AfterContentInit {
  @Input() path!: string;
  @Input() scope!: DigPluginScope;

  @ContentChild(DigPluginContentComponent, {static: true}) content!: DigPluginContentComponent;
  @ContentChild(DigPluginFormComponent, {static: true}) form!: DigPluginFormComponent;
  @ContentChild(DigPluginContentComponent, {static: true}) doc!: DigPluginContentComponent;

  constructor(private viewContainer: ViewContainerRef) { }

  ngAfterContentInit(): void {
    this.setView(DigPluginView.content);
  }

  ngOnInit(): void {
  }

  setView(view: DigPluginView) {
    this.viewContainer.clear();
    // this.viewContainer.createComponent(this.content);
  }

}
