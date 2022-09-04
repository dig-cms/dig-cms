import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigComponent } from './dig/dig.component';
import { WrapperDemoComponent } from './wrapper-demo/wrapper-demo.component';
import {DigTemplateDirective} from './directives/dig-template.directive';
import {DigDocDirective} from './directives/dig-doc.directive';
import {DigFormDirective} from './directives/dig-form.directive';
import {DigDirective} from './directives/dig.directive';
import { WrappedComponent } from './wrapped/wrapped.component';
import {FormsModule} from '@angular/forms';
import { DigPluginComponent } from './dig-plugin/dig-plugin.component';
import { DigFormComponent } from './dig-plugin/dig-form/dig-form.component';
import { DigTemplateComponent } from './dig-plugin/dig-template/dig-template.component';
import { DigDocComponent } from './dig-plugin/dig-doc/dig-doc.component';



@NgModule({
  declarations: [
    DigComponent,
    WrapperDemoComponent,
    DigDirective,
    DigFormDirective,
    DigTemplateDirective,
    DigDocDirective,
    WrappedComponent,
    DigPluginComponent,
    DigFormComponent,
    DigTemplateComponent,
    DigDocComponent
  ],
  exports: [
    DigComponent,
    WrapperDemoComponent,
    FormsModule
  ],
  imports: [
    CommonModule
  ]
})
export class WrapperComponentModule { }
