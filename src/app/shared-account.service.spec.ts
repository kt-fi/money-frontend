import { TestBed } from '@angular/core/testing';

import { SharedAccountService } from './shared-account.service';

describe('SharedAccountService', () => {
  let service: SharedAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
