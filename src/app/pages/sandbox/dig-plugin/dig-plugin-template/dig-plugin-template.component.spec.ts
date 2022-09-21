import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigPluginTemplateComponent } from './dig-plugin-template.component';

describe('DigPluginTemplateComponent', () => {
  let component: DigPluginTemplateComponent;
  let fixture: ComponentFixture<DigPluginTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigPluginTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigPluginTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
