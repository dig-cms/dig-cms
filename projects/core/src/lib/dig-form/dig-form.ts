import {ViewContainerRef} from '@angular/core';

export enum DigFormControlTypes {
  checkbox = 'checkbox',
  input = 'input',
  textarea = 'textarea',
  radioGroup = 'radioGroup',
  radio = 'radio',
  select = 'select',
}

export interface DigFormControl {
  render: () => any;
}

export interface DigForm {
  controls: DigFormControl[];
}

type FormFactory = (config: any, viewContainer: ViewContainerRef) => GenericComponent;

// todo figure out generic angular component type
interface GenericComponent {}

type DigFormProviderFactory = FormFactory | GenericComponent;
/**
 * DigFormProviders build components to render the forms
 */
export interface DigFormProvider {
  /**
   * Module that exports all of the form components
   */
  module: any;

  /**
   * The component the wraps a form group
   */
  group: DigFormProviderFactory;

  /**
   * The component the wraps a form row label
   */
  label: DigFormProviderFactory;

  /**
   * The component the wraps a form row
   */
  row: DigFormProviderFactory;

  /**
   * The component the wraps a form row error
   */
  error: DigFormProviderFactory;

  /**
   * The component that renders a text input or textarea (if rows or autosize are set)
   */
  text: DigFormProviderFactory;

  /**
   * the component that renders a select control
   */
  select: DigFormProviderFactory;
}

