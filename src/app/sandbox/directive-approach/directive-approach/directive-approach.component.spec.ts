import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveApproachComponent } from './directive-approach.component';

describe('DirectiveApproachComponent', () => {
  let component: DirectiveApproachComponent;
  let fixture: ComponentFixture<DirectiveApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveApproachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
