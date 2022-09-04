import { TestBed } from '@angular/core/testing';

import { DigFormService } from './dig-form.service';

describe('DigFormService', () => {
  let service: DigFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
