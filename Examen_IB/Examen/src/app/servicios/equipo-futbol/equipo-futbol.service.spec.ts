import { TestBed } from '@angular/core/testing';

import { EquipoFutbolService } from './equipo-futbol.service';

describe('EquipoFutbolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipoFutbolService = TestBed.get(EquipoFutbolService);
    expect(service).toBeTruthy();
  });
});
