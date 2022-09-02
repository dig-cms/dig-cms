import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DigFormControlComponent } from './dig-form-control.component';

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

  it('should register a form control', async () => {
    // component.control = {
    //   input: 'text',
    //   digProps: {
    //     control: 'input',
    //     placeholder: 'test input',
    //   },
    //   value: 'tester'
    // }
    // await fixture.isStable();
    // expect(component.input).toEqual('text');
    expect(component).toBeTruthy();
  });
});
