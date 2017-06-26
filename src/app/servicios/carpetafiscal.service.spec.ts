import { TestBed, inject } from '@angular/core/testing';

import { CarpetafiscalService } from './carpetafiscal.service';

describe('CarpetafiscalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarpetafiscalService]
    });
  });

  it('should be created', inject([CarpetafiscalService], (service: CarpetafiscalService) => {
    expect(service).toBeTruthy();
  }));
});
