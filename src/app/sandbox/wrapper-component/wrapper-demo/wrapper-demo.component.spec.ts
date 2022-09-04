import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperDemoComponent } from './wrapper-demo.component';

describe('WrapperDemoComponent', () => {
  let component: WrapperDemoComponent;
  let fixture: ComponentFixture<WrapperDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
