import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTableComponent } from './row-table.component';

describe('RowTableComponent', () => {
  let component: RowTableComponent;
  let fixture: ComponentFixture<RowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowTableComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
