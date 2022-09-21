import { TestBed } from '@angular/core/testing';

import { DigService } from './dig.service';
import {FormControl, FormGroup} from "@angular/forms";
import {firstValueFrom} from "rxjs";

fdescribe('DigService', () => {
  let service: DigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a form', async () => {
    const form = new FormGroup({
      test: new FormControl('tester')
    });
    service.setForm('tester', form);
    const data = await firstValueFrom(service.getData('tester'));
    expect(data.test).toEqual('tester');
  });

  it('should return an empty observable if the form is not set', async () => {
    const data = await firstValueFrom(service.getData('tester'));
    expect(data).toBeFalsy();
  });
});
