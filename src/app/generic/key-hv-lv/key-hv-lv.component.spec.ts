import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KeyHvLvComponent } from './key-hv-lv.component';

describe('KeyHvLvComponent', () => {
  let component: KeyHvLvComponent;
  let fixture: ComponentFixture<KeyHvLvComponent>;

  beforeEach(waitForAsync(() => {
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
