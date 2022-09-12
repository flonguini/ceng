import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartStepItemComponent } from './cart-step-item.component';

describe('CartStepItemComponent', () => {
  let component: CartStepItemComponent;
  let fixture: ComponentFixture<CartStepItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartStepItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartStepItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
