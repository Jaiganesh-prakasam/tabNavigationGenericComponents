import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProfileComponent } from './daily-profile.component';

describe('DailyProfileComponent', () => {
  let component: DailyProfileComponent;
  let fixture: ComponentFixture<DailyProfileComponent>;

  beforeEach(async(() => {
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
