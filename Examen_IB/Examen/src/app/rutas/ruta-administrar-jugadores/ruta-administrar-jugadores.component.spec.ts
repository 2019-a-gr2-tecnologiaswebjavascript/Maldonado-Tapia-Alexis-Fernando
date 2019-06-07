import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdministrarJugadoresComponent } from './ruta-administrar-jugadores.component';

describe('RutaAdministrarJugadoresComponent', () => {
  let component: RutaAdministrarJugadoresComponent;
  let fixture: ComponentFixture<RutaAdministrarJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdministrarJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdministrarJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
