import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDetalleFacturaComponent } from './ruta-detalle-factura.component';

describe('RutaDetalleFacturaComponent', () => {
  let component: RutaDetalleFacturaComponent;
  let fixture: ComponentFixture<RutaDetalleFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaDetalleFacturaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
