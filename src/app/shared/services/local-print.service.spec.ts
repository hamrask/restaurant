import { TestBed } from '@angular/core/testing';

import { LocalPrintService } from './local-print.service';

describe('LocalPrintService', () => {
  let service: LocalPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
