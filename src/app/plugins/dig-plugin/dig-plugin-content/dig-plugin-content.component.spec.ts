import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigPluginContentComponent } from './dig-plugin-content.component';

describe('DigPluginContentComponent', () => {
  let component: DigPluginContentComponent;
  let fixture: ComponentFixture<DigPluginContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigPluginContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigPluginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
