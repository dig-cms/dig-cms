import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigFormComponent} from './components/dig-form/dig-form.component';



@NgModule({
  declarations: [
    DigFormComponent
  ],
  exports: [
    DigFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DigFormModule { }
