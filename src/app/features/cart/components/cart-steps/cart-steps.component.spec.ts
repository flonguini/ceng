import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartStepsComponent } from './cart-steps.component';

describe('CartStepsComponent', () => {
  let component: CartStepsComponent;
  let fixture: ComponentFixture<CartStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
