import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailPage } from './course-detail.page';

describe('CourseDetailComponent', () => {
  let component: CourseDetailPage;
  let fixture: ComponentFixture<CourseDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
