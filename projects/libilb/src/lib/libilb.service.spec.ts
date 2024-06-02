import { TestBed } from '@angular/core/testing';

import { LibilbService } from './libilb.service';

describe('LibilbService', () => {
  let service: LibilbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibilbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
