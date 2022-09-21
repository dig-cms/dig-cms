import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DigService} from './dig.service';
import {AsyncSubject, Subject} from 'rxjs';
import {concatMapTo, takeUntil} from 'rxjs/operators';

export interface DigPluginContext {
  $implicit: any;
}

export interface ErrorContext {
  $implicit: Error;
}

@Directive({
  selector: '[digPlugin]'
})
export class DigPluginDirective implements OnInit{
  @Input() digPlugin!: string;
  @Input() digPluginForm!: FormGroup;
  @Input() digPluginData!: any;
  private unsubscribe = new Subject<boolean>();
  private init = new AsyncSubject<void>();
  private errorRef!: TemplateRef<ErrorContext>;
  constructor(
    private view: ViewContainerRef,
    private changes: ChangeDetectorRef,
    private nextRef: TemplateRef<DigPluginContext>,
    private service: DigService) { }

  ngOnInit(): void {
    if (this.digPluginForm) {
      this.registerForm();
    } else if (this.digPluginData) {
      this.registerData();
    }

    this.load();

    this.init.next()
    this.init.complete()
  }

  registerForm() {
    this.service.setForm(this.digPlugin, this.digPluginForm);
  }

  registerData() {
    this.service.setData(this.digPlugin, this.digPluginData ? this.digPluginData : {})
  }

  load() {
    this.init.pipe(
      concatMapTo(this.service.getData(this.digPlugin)),
      takeUntil(this.unsubscribe)
    ).subscribe(value => {
      this.view.clear()
      this.view.createEmbeddedView(this.nextRef, {$implicit: value ? value : {}})
      this.changes.markForCheck()
    }, error => {
      if (this.errorRef) {
        this.view.clear()
        this.view.createEmbeddedView(this.errorRef, {$implicit: error})
        this.changes.markForCheck()
      }
    })
  }

}
