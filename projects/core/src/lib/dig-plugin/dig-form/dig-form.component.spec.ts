import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigFormComponent } from './dig-form.component';

describe('DigFormComponent', () => {
  let component: DigFormComponent;
  let fixture: ComponentFixture<DigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
