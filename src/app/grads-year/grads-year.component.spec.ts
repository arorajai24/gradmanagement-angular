import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradsYearComponent } from './grads-year.component';

describe('GradsYearComponent', () => {
  let component: GradsYearComponent;
  let fixture: ComponentFixture<GradsYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradsYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradsYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
