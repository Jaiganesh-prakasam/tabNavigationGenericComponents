import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KeyInputUnitComponent } from './key-input-unit.component';

describe('KeyInputUnitComponent', () => {
  let component: KeyInputUnitComponent;
  let fixture: ComponentFixture<KeyInputUnitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyInputUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyInputUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
