import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";

export interface FormRegistry {
  [key: string]: FormGroup
}
@Injectable({
  providedIn: 'root'
})
export class DigPluginService {
  private registry: BehaviorSubject<FormRegistry> = new BehaviorSubject<FormRegistry>({});
  constructor() { }

  register(scope: string, path: string, form: FormGroup) {
    const key = (scope + '_' + path).toLowerCase();
    const registry = this.registry.getValue();
    if (! registry.hasOwnProperty(key)) {
      registry[key] = form;
      this.registry.next(registry);
    }
    return registry[key];
  }
}
