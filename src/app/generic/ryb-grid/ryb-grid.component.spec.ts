import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RybGridComponent } from './ryb-grid.component';

describe('RybGridComponent', () => {
  let component: RybGridComponent;
  let fixture: ComponentFixture<RybGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RybGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RybGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
