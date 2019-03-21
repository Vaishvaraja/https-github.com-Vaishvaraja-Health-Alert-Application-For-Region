import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasePage } from './disease.page';

describe('DiseasePage', () => {
  let component: DiseasePage;
  let fixture: ComponentFixture<DiseasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
