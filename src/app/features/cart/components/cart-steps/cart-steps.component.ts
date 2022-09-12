import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartStep } from "../../models/cart-step";
import { CartStore } from '../../store/cart.store';

@Component({
    selector: 'app-cart-steps',
    templateUrl: './cart-steps.component.html',
    styleUrls: ['./cart-steps.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartStepsComponent
{
    @Input()
    public step: CartStep

    constructor(public store: CartStore){}
}