import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBukuPage } from './detail-buku.page';

describe('DetailBukuPage', () => {
  let component: DetailBukuPage;
  let fixture: ComponentFixture<DetailBukuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBukuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBukuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
