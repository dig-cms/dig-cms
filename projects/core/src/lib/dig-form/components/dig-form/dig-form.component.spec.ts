import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DigFormComponent } from './dig-form.component';

describe('DigFormComponent', () => {
  let component: DigFormComponent;
  let fixture: ComponentFixture<DigFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DigFormComponent ],
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(DigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
