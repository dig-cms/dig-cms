import {
  Directive, Input, TemplateRef, ViewContainerRef,
  OnDestroy, OnInit, ChangeDetectorRef
} from '@angular/core'
import {Observable, Subject, AsyncSubject, from, merge, of} from "rxjs";
import { takeUntil, concatMapTo } from "rxjs/operators";
import {FormGroup} from "@angular/forms";
import {DigPluginService} from "./dig-plugin.service";

export interface DigPluginDataContext<T> {
  $implicit: T;
  digPluginData: T;
}

export interface ErrorContext {
  $implicit: Error;
}

@Directive({
  selector: "[digPluginData]"
})
export class DigPluginDataDirective<T> implements OnDestroy, OnInit {
  private errorRef!: TemplateRef<ErrorContext>;
  private beforeRef!: TemplateRef<null>;
  private unsubscribe = new Subject<boolean>();
  private init = new AsyncSubject<void>();

  constructor(
    private view: ViewContainerRef,
    private nextRef: TemplateRef<DigPluginDataContext<T>>,
    private changes: ChangeDetectorRef,
    private service: DigPluginService
  ) {}

  @Input() scope!: string;
  @Input() path!: string;

  @Input()
  set digPluginData(data: any) {
    const formRef = this.service.register(this.scope, this.path, form);
    this.showBefore()
    this.unsubscribe.next(true);
    this.init.pipe(
      concatMapTo(merge(
        of(formRef.value),
        formRef.valueChanges
      )),
      takeUntil(this.unsubscribe)
    ).subscribe(value => {
      this.view.clear()
      this.view.createEmbeddedView(this.nextRef, {$implicit: value, digPlugin: value})
      this.changes.markForCheck()
    }, error => {
      if (this.errorRef) {
        this.view.clear()
        this.view.createEmbeddedView(this.errorRef, {$implicit: error})
        this.changes.markForCheck()
      }
    })
  }

  @Input()
  set DigPluginError(ref: TemplateRef<ErrorContext>) {
    this.errorRef = ref;
  }

  @Input()
  set DigPluginBefore(ref: TemplateRef<null>) {
    this.beforeRef = ref;
  }

  ngOnDestroy() {
    this.unsubscribe.next(true)
  }

  ngOnInit() {
    this.showBefore()
    this.init.next()
    this.init.complete()
  }

  private showBefore(): void {
    if (this.beforeRef) {
      this.view.clear()
      this.view.createEmbeddedView(this.beforeRef)
    }
  }
}

