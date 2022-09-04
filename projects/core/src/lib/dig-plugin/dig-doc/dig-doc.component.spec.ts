import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigDocComponent } from './dig-doc.component';

describe('DigDocComponent', () => {
  let component: DigDocComponent;
  let fixture: ComponentFixture<DigDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
