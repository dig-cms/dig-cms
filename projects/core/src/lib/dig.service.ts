import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, map, merge, Observable, of, Subscription} from "rxjs";
import {FormGroup} from "@angular/forms";

export interface DigRegistryEntry {
  data: any,
  uid: string,
  dirty: boolean,
  pristine: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DigService implements OnDestroy{
  private registry: {[uid: string]: BehaviorSubject<DigRegistryEntry>} = {};
  private subs: Subscription[] = [];
  constructor() { }

  createIfNotExists(uid: string, data?: any): BehaviorSubject<DigRegistryEntry> {
    if (! this.registry.hasOwnProperty(uid)) {
      this.registry[uid] = new BehaviorSubject<DigRegistryEntry>({
        uid,
        data,
        dirty: false,
        pristine: true
      });
    }
    return this.registry[uid];
  }

  setData(uid: string, data?: any) {
    const subject = this.createIfNotExists(uid);
    subject.next({
      uid,
      data,
      dirty: true,
      pristine: false
    });
  }

  setForm(uid: string, form: FormGroup) {
    this.setData(uid, form.value);
    this.subs.push(
      form.valueChanges.subscribe(data => {
        this.setData(uid, data);
      })
    )
  }

  getData(uid: string): Observable<any> {
    return this.createIfNotExists(uid).asObservable().pipe(
      map(ref => (ref.data ? {...ref.data} : null))
    )
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
