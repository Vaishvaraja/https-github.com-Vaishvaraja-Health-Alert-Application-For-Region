import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesPage } from './diseases.page';

describe('DiseasesPage', () => {
  let component: DiseasesPage;
  let fixture: ComponentFixture<DiseasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
