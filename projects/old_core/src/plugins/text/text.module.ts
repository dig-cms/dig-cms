import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DigCmsModule} from '../../lib/dig-cms.module';



@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    DigCmsModule,
    ReactiveFormsModule
  ]
})
export class TextModule { }
