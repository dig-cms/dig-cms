import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigPluginFormComponent } from './dig-plugin-form.component';

describe('DigPluginFormComponent', () => {
  let component: DigPluginFormComponent;
  let fixture: ComponentFixture<DigPluginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigPluginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigPluginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
