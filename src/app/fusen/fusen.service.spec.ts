import { TestBed } from '@angular/core/testing';

import { FusenService } from './fusen.service';

describe('FusenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FusenService = TestBed.get(FusenService);
    expect(service).toBeTruthy();
  });
});
