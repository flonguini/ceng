import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-cart-trash',
    templateUrl: './cart-trash.component.html',
    styleUrls: ['./cart-trash.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartTrashComponent 
{
    @Input()
    public color = '#F26464';
}