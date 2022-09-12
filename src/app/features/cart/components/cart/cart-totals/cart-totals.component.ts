import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartStore } from '../../../store/cart.store';

@Component({
    selector: 'app-cart-totals',
    templateUrl: './cart-totals.component.html',
    styleUrls: ['./cart-totals.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartTotalsComponent
{
    constructor(public store: CartStore) { }
}
