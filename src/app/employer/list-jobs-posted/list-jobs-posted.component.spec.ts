import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobsPostedComponent } from './list-jobs-posted.component';

describe('EmployerComponent', () => {
  let component: ListJobsPostedComponent;
  let fixture: ComponentFixture<ListJobsPostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJobsPostedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobsPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
