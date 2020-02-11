import { TestBed } from '@angular/core/testing';

import { HttpEquipoService } from './http-equipo.service';

describe('HttpEquipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpEquipoService = TestBed.get(HttpEquipoService);
    expect(service).toBeTruthy();
  });
});
