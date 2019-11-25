import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineraddcourseComponent } from './traineraddcourse.component';

describe('TraineraddcourseComponent', () => {
  let component: TraineraddcourseComponent;
  let fixture: ComponentFixture<TraineraddcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineraddcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineraddcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
