import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVideojuegosDeportesComponent } from './ruta-videojuegos-deportes.component';

describe('RutaVideojuegosDeportesComponent', () => {
  let component: RutaVideojuegosDeportesComponent;
  let fixture: ComponentFixture<RutaVideojuegosDeportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVideojuegosDeportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVideojuegosDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
