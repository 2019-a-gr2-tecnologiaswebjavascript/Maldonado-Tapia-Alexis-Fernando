import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaComprasComponent } from './ruta-compras.component';

describe('RutaComprasComponent', () => {
  let component: RutaComprasComponent;
  let fixture: ComponentFixture<RutaComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
