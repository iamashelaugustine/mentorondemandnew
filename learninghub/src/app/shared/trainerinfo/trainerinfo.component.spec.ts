import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerinfoComponent } from './trainerinfo.component';

describe('TrainerinfoComponent', () => {
  let component: TrainerinfoComponent;
  let fixture: ComponentFixture<TrainerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
