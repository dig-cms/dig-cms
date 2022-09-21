import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginExampleComponent } from './plugin-example.component';

describe('PluginExampleComponent', () => {
  let component: PluginExampleComponent;
  let fixture: ComponentFixture<PluginExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
