import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearJugadoresComponent } from './ruta-crear-jugadores.component';

describe('RutaCrearJugadoresComponent', () => {
  let component: RutaCrearJugadoresComponent;
  let fixture: ComponentFixture<RutaCrearJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearJugadoresComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
