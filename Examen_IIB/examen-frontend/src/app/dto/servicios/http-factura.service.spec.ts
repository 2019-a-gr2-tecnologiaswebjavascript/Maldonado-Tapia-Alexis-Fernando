import { TestBed } from '@angular/core/testing';

import { HttpFacturaService } from './http-factura.service';

describe('HttpFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpFacturaService = TestBed.get(HttpFacturaService);
    expect(service).toBeTruthy();
  });
});
