import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainereditprofileComponent } from './trainereditprofile.component';

describe('TrainereditprofileComponent', () => {
  let component: TrainereditprofileComponent;
  let fixture: ComponentFixture<TrainereditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainereditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainereditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
