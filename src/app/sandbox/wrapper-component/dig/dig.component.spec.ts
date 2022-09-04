import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigComponent } from './dig.component';

describe('DigComponent', () => {
  let component: DigComponent;
  let fixture: ComponentFixture<DigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
