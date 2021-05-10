import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradsDiversityComponent } from './grads-diversity.component';

describe('GradsDiversityComponent', () => {
  let component: GradsDiversityComponent;
  let fixture: ComponentFixture<GradsDiversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradsDiversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradsDiversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
