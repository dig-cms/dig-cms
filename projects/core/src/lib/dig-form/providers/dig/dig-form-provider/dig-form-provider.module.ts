import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSectionComponent } from './form-section/form-section.component';
import { FormRowComponent } from './form-row/form-row.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { FormLabelComponent } from './form-label/form-label.component';
import { FormTextComponent } from './form-text/form-text.component';
import { FormSelectComponent } from './form-select/form-select.component';



@NgModule({
  declarations: [
    FormSectionComponent,
    FormRowComponent,
    FormErrorComponent,
    FormLabelComponent,
    FormTextComponent,
    FormSelectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DigFormProviderModule { }
