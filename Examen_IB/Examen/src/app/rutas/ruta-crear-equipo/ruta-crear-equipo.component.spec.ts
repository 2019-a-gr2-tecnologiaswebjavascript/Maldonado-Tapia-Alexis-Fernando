import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearEquipoComponent } from './ruta-crear-equipo.component';

describe('RutaCrearEquipoComponent', () => {
  let component: RutaCrearEquipoComponent;
  let fixture: ComponentFixture<RutaCrearEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
