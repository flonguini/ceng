import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTrashComponent } from './cart-trash.component';

describe('CartTrashComponent', () => {
  let component: CartTrashComponent;
  let fixture: ComponentFixture<CartTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTrashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
