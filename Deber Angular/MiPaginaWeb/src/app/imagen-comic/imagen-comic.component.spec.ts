import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenComicComponent } from './imagen-comic.component';

describe('ImagenComicComponent', () => {
  let component: ImagenComicComponent;
  let fixture: ComponentFixture<ImagenComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
