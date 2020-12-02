import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllJobApplicationComponent } from './view-all-job-application.component';

describe('ViewAllJobApplicationComponent', () => {
  let component: ViewAllJobApplicationComponent;
  let fixture: ComponentFixture<ViewAllJobApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllJobApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
