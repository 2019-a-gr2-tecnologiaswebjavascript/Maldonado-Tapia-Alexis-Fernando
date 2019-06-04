import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearJugadorComponent } from './ruta-crear-jugador.component';

describe('RutaCrearJugadorComponent', () => {
  let component: RutaCrearJugadorComponent;
  let fixture: ComponentFixture<RutaCrearJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
