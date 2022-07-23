import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstParameterComponent } from './inst-parameter.component';

describe('InstParameterComponent', () => {
  let component: InstParameterComponent;
  let fixture: ComponentFixture<InstParameterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
