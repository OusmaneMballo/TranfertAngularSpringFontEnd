import { TestBed } from '@angular/core/testing';

import { RecepteurService } from './recepteur.service';

describe('RecepteurService', () => {
  let service: RecepteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
