import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBukuPage } from './add-buku.page';

describe('AddBukuPage', () => {
  let component: AddBukuPage;
  let fixture: ComponentFixture<AddBukuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBukuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBukuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
