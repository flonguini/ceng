import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { CartStore } from 'src/app/features/cart/store/cart.store';
import { tryRunPromise } from 'src/app/shared/utils/util';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    providers: [CartService]
})
export class CartComponent implements OnInit
{
    constructor(public store: CartStore, private cartService: CartService) 
    {
        
    }
    
    async ngOnInit(): Promise<void>
    {
        // const [courseCart, error] = await tryRunPromise(this.cartService.myCart());
        const total = this.cartService.numberOfCoursesInCart();
        this.store.courseStore.setNumberOfCourses(total);

        // if (courseCart != null && courseCart.length > 0)
        //     courseCart.forEach(c => this.store.courseStore.addItem(c))
    }
}