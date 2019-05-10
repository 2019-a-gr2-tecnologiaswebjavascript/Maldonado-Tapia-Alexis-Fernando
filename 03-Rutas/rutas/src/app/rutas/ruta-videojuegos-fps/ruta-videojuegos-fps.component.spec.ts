import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVideojuegosFpsComponent } from './ruta-videojuegos-fps.component';

describe('RutaVideojuegosFpsComponent', () => {
  let component: RutaVideojuegosFpsComponent;
  let fixture: ComponentFixture<RutaVideojuegosFpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVideojuegosFpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVideojuegosFpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
