import {TemplateRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

export enum DigPluginView {
  doc = 'DOC',
  form = 'FORM',
  template = 'TEMPLATE',
}

export interface DigPlugin {
  uid: string;
  form: any;
  doc: any;
  template: any;
}

export interface DigTemplateBase {
  state: Observable<any>;
  template: TemplateRef<any>;
}

export interface DigPluginForm extends DigTemplateBase {
  form: FormGroup;
}

export interface DigPluginTemplate extends DigTemplateBase {}
export interface DigPluginDoc extends DigTemplateBase {}
