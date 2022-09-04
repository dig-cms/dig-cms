import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigPageComponent } from './dig-page.component';

describe('DigPageComponent', () => {
  let component: DigPageComponent;
  let fixture: ComponentFixture<DigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
