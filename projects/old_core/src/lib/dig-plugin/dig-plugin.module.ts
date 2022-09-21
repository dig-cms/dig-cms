import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigPluginComponent} from './dig-plugin.component';
import {DigFormComponent} from './dig-form/dig-form.component';
import {DigTemplateComponent} from './dig-template/dig-template.component';
import {DigDocComponent} from './dig-doc/dig-doc.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DigPluginComponent,
    DigFormComponent,
    DigTemplateComponent,
    DigDocComponent
  ],
  exports: [
    DigPluginComponent,
    DigFormComponent,
    DigTemplateComponent,
    DigDocComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DigPluginModule { }
