import {DigFormProviderModule} from './dig-form-provider.module';
import {FormSectionComponent} from './form-section/form-section.component';
import {DigFormProvider} from '../../../dig-form';
import {FormRowComponent} from './form-row/form-row.component';
import {FormErrorComponent} from './form-error/form-error.component';
import {FormLabelComponent} from './form-label/form-label.component';
import {FormTextComponent} from './form-text/form-text.component';
import {FormSelectComponent} from './form-select/form-select.component';
import {ViewContainerRef} from '@angular/core';

export const DigHtmlFormProvider: DigFormProvider = {
  module: DigFormProviderModule,
  group: (config: any, viewContainer: ViewContainerRef) => FormSectionComponent,
  row: (config: any, viewContainer: ViewContainerRef) => FormRowComponent,
  error: (config: any, viewContainer: ViewContainerRef) => FormErrorComponent,
  label: (config: any, viewContainer: ViewContainerRef) => FormLabelComponent,
  text: (config: any, viewContainer: ViewContainerRef) => FormTextComponent,
  select: (config: any, viewContainer: ViewContainerRef) => FormSelectComponent
}
