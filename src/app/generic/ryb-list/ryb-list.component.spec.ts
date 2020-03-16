import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RybListComponent } from './ryb-list.component';

describe('RybListComponent', () => {
  let component: RybListComponent;
  let fixture: ComponentFixture<RybListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RybListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RybListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
