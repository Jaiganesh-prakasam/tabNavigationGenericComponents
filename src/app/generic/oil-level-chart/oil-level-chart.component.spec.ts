import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OilLevelChartComponent } from './oil-level-chart.component';

describe('OilLevelChartComponent', () => {
  let component: OilLevelChartComponent;
  let fixture: ComponentFixture<OilLevelChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OilLevelChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilLevelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
