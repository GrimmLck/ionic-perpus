import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuPage } from './buku.page';

describe('BukuPage', () => {
  let component: BukuPage;
  let fixture: ComponentFixture<BukuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
