import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainercourselistComponent } from './trainercourselist.component';

describe('TrainercourselistComponent', () => {
  let component: TrainercourselistComponent;
  let fixture: ComponentFixture<TrainercourselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainercourselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainercourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
