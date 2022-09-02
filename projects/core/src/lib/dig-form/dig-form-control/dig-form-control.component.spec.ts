import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DigFormControlComponent } from './dig-form-control.component';
import {firstValueFrom} from 'rxjs';

describe('DigFormControlComponent', () => {
  let component: DigFormControlComponent;
  let fixture: ComponentFixture<DigFormControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DigFormControlComponent ],
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(DigFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should register a form control', async () => {
    component.control = {
      input: 'text',
      digProps: {
        control: 'input',
        placeholder: 'test input',
      },
      value: 'tester'
    }
    component.ngOnInit();
    await fixture.whenStable();
    expect(component.input).toEqual('text');
    expect(component).toBeTruthy();
  });

  it('should output a form control', async () => {
    component.control = {
      input: 'text',
      digProps: {
        control: 'input',
        placeholder: 'test input',
      },
      value: 'tester'
    }
    spyOn(component.formRegistered, 'emit');
    component.ngOnInit();
    expect(component.formRegistered.emit).toHaveBeenCalled();
  });
});
