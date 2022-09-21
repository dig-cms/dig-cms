import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigPluginDocComponent } from './dig-plugin-doc.component';

describe('DigPluginDocComponent', () => {
  let component: DigPluginDocComponent;
  let fixture: ComponentFixture<DigPluginDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigPluginDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigPluginDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
