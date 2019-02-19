import { TestBed } from '@angular/core/testing';

import { BritanniaService } from './britannia.service';

describe('BritanniaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BritanniaService = TestBed.get(BritanniaService);
    expect(service).toBeTruthy();
  });
});
