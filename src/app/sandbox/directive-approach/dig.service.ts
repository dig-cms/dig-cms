import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DigDirective} from './directives/dig.directive';

@Injectable({
  providedIn: 'root'
})
export class DigService {
  private registry: BehaviorSubject<{[key: string]: DigDirective}> = new BehaviorSubject({});

  constructor() {
  }

  register(instance: any) {
    this.registry.next({...this.registry.value, [instance.digId]: instance});
  }

  get(uid: string): Observable<DigDirective> {
    return this.registry.pipe(map(registry => registry[uid]));
  }
}
