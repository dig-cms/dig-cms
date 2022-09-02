import { DigDirective } from './dig.directive';

import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DigService} from '../dig-service/dig.service';
import {TextComponent} from '../../test/components/text.component';
import {firstValueFrom, lastValueFrom} from 'rxjs';

@Component({
  selector: 'test-page',
  template: '<text-component #tester [dig]="tester" uid="test">Test Control</text-component>'
})
export class TestPageComponent {}

describe('DigDirective', () => {
  let component: TestPageComponent;
  let fixture: ComponentFixture<TestPageComponent>;
  let service: DigService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextComponent, TestPageComponent, DigDirective ],
      imports: [],
      providers: [
        DigService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DigService);
    fixture.detectChanges();
  }));
  it('should create an instance', async () => {
    const directive = new DigDirective(new DigService());
    expect(directive).toBeTruthy();
  });
  it('should get the controls', async () => {
    await fixture.whenStable();
    const controls: any = await firstValueFrom(service.controls$);
    expect(controls.test?.length).toEqual(2);
  });
  it('should open the form on click', async () => {
    const service = new DigService();
    const directive = new DigDirective(service);
    directive.uid = 'test';
    directive.dig = TestBed.createComponent(TextComponent).componentInstance;
    directive.ngAfterViewInit();
    directive.handleClick();
    const active: any = await firstValueFrom(service.active$);
    expect(active.length).toEqual(2);
    const description = active.find((c: any) => c.input === 'description');
    expect(description).toBeTruthy();
  });
});
