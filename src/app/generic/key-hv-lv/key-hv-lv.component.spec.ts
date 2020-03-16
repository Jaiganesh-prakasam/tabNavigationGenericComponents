import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyHvLvComponent } from './key-hv-lv.component';

describe('KeyHvLvComponent', () => {
  let component: KeyHvLvComponent;
  let fixture: ComponentFixture<KeyHvLvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyHvLvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyHvLvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
