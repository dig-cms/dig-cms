import { Injectable } from '@angular/core';
import {DigFormControl, DigFormProvider} from './dig-form';

@Injectable({
  providedIn: 'root'
})
export class DigFormService{

  constructor() { }

  controlFactory(type: string, props: any): DigFormControl | undefined {
    return undefined;
  }
}
