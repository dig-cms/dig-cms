import {
  AfterContentInit,
  AfterViewInit,
  ContentChildren,
  Directive,
  Input, OnInit, QueryList, ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {BehaviorSubject, forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import {DigService} from '../dig.service';
import {DigFormDirective} from './dig-form.directive';

@Directive({
  selector: '[digId]'
})
export class DigIdDirective implements OnInit{
  @Input() digId!: string;
  @ViewChild(DigFormDirective, {static: true}) formRef!: DigFormDirective;

  constructor(private viewContainerRef: ViewContainerRef, private dig: DigService) {

  }

  ngOnInit(): void {
    this.dig.register(this);
  }

}
