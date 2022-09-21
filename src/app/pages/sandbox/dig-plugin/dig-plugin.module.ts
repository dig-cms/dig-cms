import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigPluginDirective } from './dig-plugin.directive';
import { DigPluginFormComponent } from './dig-plugin-form/dig-plugin-form.component';
import { DigPluginComponent } from './dig-plugin/dig-plugin.component';
import { DigPluginTemplateComponent } from './dig-plugin-template/dig-plugin-template.component';
import { DigPluginDocComponent } from './dig-plugin-doc/dig-plugin-doc.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DigPluginDataDirective } from './dig-plugin-data.directive';



@NgModule({
  declarations: [
    DigPluginDirective,
    DigPluginFormComponent,
    DigPluginComponent,
    DigPluginTemplateComponent,
    DigPluginDocComponent,
    DigPluginDataDirective
  ],
  exports: [
    DigPluginDirective,
    DigPluginFormComponent,
    DigPluginComponent,
    DigPluginTemplateComponent,
    DigPluginDocComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DigPluginModule { }
