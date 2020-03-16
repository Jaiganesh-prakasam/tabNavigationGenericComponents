import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationStrategyComponent } from './migration-strategy.component';

describe('MigrationStrategyComponent', () => {
  let component: MigrationStrategyComponent;
  let fixture: ComponentFixture<MigrationStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrationStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
