import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintrainerlistComponent } from './admintrainerlist.component';

describe('AdmintrainerlistComponent', () => {
  let component: AdmintrainerlistComponent;
  let fixture: ComponentFixture<AdmintrainerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintrainerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintrainerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
