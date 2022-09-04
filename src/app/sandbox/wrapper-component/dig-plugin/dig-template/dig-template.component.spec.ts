import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigTemplateComponent } from './dig-template.component';

describe('DigTemplateComponent', () => {
  let component: DigTemplateComponent;
  let fixture: ComponentFixture<DigTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
