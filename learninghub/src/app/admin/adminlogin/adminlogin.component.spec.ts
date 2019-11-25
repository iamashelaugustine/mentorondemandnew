import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { adminloginComponent } from './adminlogin.component';

describe('adminloginComponent', () => {
  let component: adminloginComponent;
  let fixture: ComponentFixture<adminloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ adminloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(adminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
