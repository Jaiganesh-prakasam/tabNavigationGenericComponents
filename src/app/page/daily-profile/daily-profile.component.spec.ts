import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailyProfileComponent } from './daily-profile.component';

describe('DailyProfileComponent', () => {
  let component: DailyProfileComponent;
  let fixture: ComponentFixture<DailyProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
