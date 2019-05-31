import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedeckPage } from './createdeck.page';

describe('CreatedeckPage', () => {
  let component: CreatedeckPage;
  let fixture: ComponentFixture<CreatedeckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedeckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedeckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
