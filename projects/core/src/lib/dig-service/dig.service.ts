import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DigService {
  private registry: BehaviorSubject<{[key: string]: any}> = new BehaviorSubject<any>({});
  private active: BehaviorSubject<string|null> = new BehaviorSubject<string|null>(null);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public readonly controls$ = this.registry.asObservable();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public readonly active$ = this.active.asObservable().pipe(
    switchMap(active => this.registry.asObservable().pipe(
      map(registry => active && registry ? registry[active] : null)
    ))
  );

  constructor() {
    this.loadFromStorage();
  }

  openForm(uid: string) {
    this.active.next(uid);
  }

  dismiss() {
    this.active.next('');
  }

  setControl(uid: string, config: any) {
    const controls = {...this.registry.getValue()};
    controls[uid] = config;
    this.registry.next(controls);
  }

  private loadFromStorage() {
  }
}
