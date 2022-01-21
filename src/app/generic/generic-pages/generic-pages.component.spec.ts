import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPagesComponent } from './generic-pages.component';

describe('GenericPagesComponent', () => {
  let component: GenericPagesComponent;
  let fixture: ComponentFixture<GenericPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
