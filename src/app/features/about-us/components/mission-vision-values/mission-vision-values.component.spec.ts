import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVisionValuesComponent } from './mission-vision-values.component';

describe('MissionVisionValuesComponent', () => {
  let component: MissionVisionValuesComponent;
  let fixture: ComponentFixture<MissionVisionValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionVisionValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionVisionValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
