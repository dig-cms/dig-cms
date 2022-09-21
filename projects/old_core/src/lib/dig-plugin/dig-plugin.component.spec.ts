import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigPluginComponent } from './dig-plugin.component';

describe('DigPluginComponent', () => {
  let component: DigPluginComponent;
  let fixture: ComponentFixture<DigPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigPluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
