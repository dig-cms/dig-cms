import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigPluginComponent } from './dig-plugin.component';
import { DigPluginDocComponent } from './dig-plugin-doc/dig-plugin-doc.component';
import { DigPluginContentComponent } from './dig-plugin-content/dig-plugin-content.component';
import { DigPluginFormComponent } from './dig-plugin-form/dig-plugin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DigPluginDirective } from './dig-plugin.directive';



@NgModule({
  declarations: [
    DigPluginComponent,
    DigPluginDocComponent,
    DigPluginContentComponent,
    DigPluginFormComponent,
    DigPluginDirective,
  ],
  exports: [
    DigPluginComponent,
    DigPluginDocComponent,
    DigPluginContentComponent,
    DigPluginFormComponent,
    DigPluginDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DigPluginModule { }
