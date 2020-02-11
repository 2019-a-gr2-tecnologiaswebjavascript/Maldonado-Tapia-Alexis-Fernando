import { TestBed } from '@angular/core/testing';

import { HttpDetalleFacturaService } from './http-detalle-factura.service';

describe('HttpDetalleFacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpDetalleFacturaService = TestBed.get(HttpDetalleFacturaService);
    expect(service).toBeTruthy();
  });
});
