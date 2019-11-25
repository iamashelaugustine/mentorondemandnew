import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainertechlistComponent } from './trainertechlist.component';

describe('TrainertechlistComponent', () => {
  let component: TrainertechlistComponent;
  let fixture: ComponentFixture<TrainertechlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainertechlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainertechlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
