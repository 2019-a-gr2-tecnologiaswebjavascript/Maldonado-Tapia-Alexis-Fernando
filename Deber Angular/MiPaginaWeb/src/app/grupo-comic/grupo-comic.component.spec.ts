import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoComicComponent } from './grupo-comic.component';

describe('GrupoComicComponent', () => {
  let component: GrupoComicComponent;
  let fixture: ComponentFixture<GrupoComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
