import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainereditComponent } from './traineredit.component';

describe('TrainereditComponent', () => {
  let component: TrainereditComponent;
  let fixture: ComponentFixture<TrainereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
