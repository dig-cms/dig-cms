import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigFormComponent} from './dig-form/dig-form.component';
import {DigFormControlComponent} from './dig-form-control/dig-form-control.component';



@NgModule({
  declarations: [
    DigFormComponent,
    DigFormControlComponent
  ],
  exports: [
    DigFormComponent,
    DigFormControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DigFormModule { }
