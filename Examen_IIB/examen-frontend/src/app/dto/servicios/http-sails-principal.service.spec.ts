import { TestBed } from '@angular/core/testing';

import { HttpSailsPrincipal } from './http-sails-principal.service';
import { Equipo } from '../interfaces/Equipo';

describe('HttpSailsPrincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSailsPrincipal<Equipo> = TestBed.get(HttpSailsPrincipal);
    expect(service).toBeTruthy();
  });
});
