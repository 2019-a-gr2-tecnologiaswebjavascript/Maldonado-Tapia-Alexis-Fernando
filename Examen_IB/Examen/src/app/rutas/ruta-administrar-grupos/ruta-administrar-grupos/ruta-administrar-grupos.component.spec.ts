import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdministrarGruposComponent } from './ruta-administrar-grupos.component';

describe('RutaAdministrarGruposComponent', () => {
  let component: RutaAdministrarGruposComponent;
  let fixture: ComponentFixture<RutaAdministrarGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdministrarGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdministrarGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
