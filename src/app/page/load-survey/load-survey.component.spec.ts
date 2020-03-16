import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSurveyComponent } from './load-survey.component';

describe('LoadSurveyComponent', () => {
  let component: LoadSurveyComponent;
  let fixture: ComponentFixture<LoadSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
