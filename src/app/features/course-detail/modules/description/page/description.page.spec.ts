import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPage } from './description.page';

describe('DescriptionComponent', () => {
  let component: DescriptionPage;
  let fixture: ComponentFixture<DescriptionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
