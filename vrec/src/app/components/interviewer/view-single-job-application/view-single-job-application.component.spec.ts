import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleJobApplicationComponent } from './view-single-job-application.component';

describe('ViewSingleJobApplicationComponent', () => {
  let component: ViewSingleJobApplicationComponent;
  let fixture: ComponentFixture<ViewSingleJobApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleJobApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
