import { TestBed } from '@angular/core/testing';

import { EmeteurServiceService } from './emeteur-service.service';

describe('EmeteurServiceService', () => {
  let service: EmeteurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmeteurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
