import { TestBed } from '@angular/core/testing';

import { HttpJugadorService } from './http-jugador.service';

describe('HttpJugadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpJugadorService = TestBed.get(HttpJugadorService);
    expect(service).toBeTruthy();
  });
});
