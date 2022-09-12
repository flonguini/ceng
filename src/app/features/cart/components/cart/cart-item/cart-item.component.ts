import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { CartService } from '../../../services/cart.service';
import { CartStore } from '../../../store/cart.store';
import { CartItem } from './cart.item';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent
{
    @Input()
    public item: CartItem;

    private isMouseOver = new BehaviorSubject<string>('#D8D8D8');
    public isMouseOver$ = this.isMouseOver.asObservable();
    
    constructor(
        private store: CartStore, 
        private cartService: CartService)
    {

    }

    public removeItem(): void
    {
        if(!this.item)
            return;

        this.cartService.removeCourseIdFromStorage(this.item.courseId);
        this.store.courseStore.removeItem(this.item);
    }

    public onMouseEnter(): void
    {
        this.isMouseOver.next('#F26464');
    }

    public onMouseLeave(): void
    {
        this.isMouseOver.next('#D8D8D8');
    }
}