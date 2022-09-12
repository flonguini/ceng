import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CartStep } from "../../../models/cart-step";

@Component({
    selector: 'app-cart-step-item',
    templateUrl: './cart-step-item.component.html',
    styleUrls: ['./cart-step-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartStepItemComponent
{
    @Input()
    public step: CartStep

    @Input()
    public currentStep: CartStep;

    // TODO: remove change detection multiple calls
    public get selected(): boolean
    {
        if(!this.currentStep)
            return false;
        return this.currentStep == this.step;
    }

    public color = this.selected ? '#FFFFFF' : '#666C7E';
}