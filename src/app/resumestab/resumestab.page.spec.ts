import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumestabPage } from './resumestab.page';

describe('ResumestabPage', () => {
  let component: ResumestabPage;
  let fixture: ComponentFixture<ResumestabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumestabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumestabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
