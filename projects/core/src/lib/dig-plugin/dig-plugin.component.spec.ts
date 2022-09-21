import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigPluginComponent } from './dig-plugin.component';
import {Component, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DigModule} from "../dig.module";
import {CommonModule} from "@angular/common";
import {DigPluginFormComponent} from "../dig-plugin-form/dig-plugin-form.component";
import {firstValueFrom} from "rxjs";

describe('DigPluginComponent', () => {
  describe('Component', () => {
    let component: DigPluginComponent;
    let fixture: ComponentFixture<DigPluginComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [DigModule]
      })
        .compileComponents();

      fixture = TestBed.createComponent(DigPluginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      // add the form child
      component.formComponent = TestBed.createComponent(DigPluginFormComponent).componentInstance;
      component.formComponent.formGroup = new FormGroup<any>({
        name: new FormControl('forrest')
      })
      component.ngAfterViewInit();
      fixture.detectChanges();
    });

    it('should create', async () => {
      await fixture.whenStable();
      expect(component).toBeTruthy();
    });

    it('should get the form instance', async () => {
      await fixture.whenStable();
      expect(component.getForm()).toBeTruthy();
    });

    it('should get the data from the form', async () => {
      await fixture.whenStable();
      const data = await firstValueFrom(component.getData());
      expect(data).toBeTruthy();
      expect(data.name).toEqual('forrest');
    });
  })
});
