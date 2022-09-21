import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigDirective } from './dig.directive';
import { DigPluginComponent } from './dig-plugin/dig-plugin.component';
import { DigPluginFormComponent } from './dig-plugin-form/dig-plugin-form.component';
import { DigPluginTemplateComponent } from './dig-plugin-template/dig-plugin-template.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DigDirective,
    DigPluginComponent,
    DigPluginFormComponent,
    DigPluginTemplateComponent
  ],
  exports: [
    DigDirective,
    DigPluginComponent,
    DigPluginFormComponent,
    DigPluginTemplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DigModule { }
