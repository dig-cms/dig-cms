import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigPluginComponent } from './dig-plugin/dig-plugin.component';
import { DigPluginFormComponent } from './dig-plugin-form/dig-plugin-form.component';
import { DigPluginTemplateComponent } from './dig-plugin-template/dig-plugin-template.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DigTemplateDirective } from './dig-template.directive';
import { DigPluginDirective } from './dig-plugin.directive';



@NgModule({
  declarations: [
    DigPluginComponent,
    DigPluginFormComponent,
    DigPluginTemplateComponent,
    DigTemplateDirective,
    DigPluginDirective
  ],
  exports: [
    DigPluginComponent,
    DigPluginFormComponent,
    DigPluginTemplateComponent,
    DigPluginDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DigModule { }
