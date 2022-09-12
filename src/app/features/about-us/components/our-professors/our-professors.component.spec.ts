import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProfessorsComponent } from './our-professors.component';

describe('OurProfessorsComponent', () => {
  let component: OurProfessorsComponent;
  let fixture: ComponentFixture<OurProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProfessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
