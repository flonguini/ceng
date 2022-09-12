import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { tryRunPromise } from 'src/app/shared/utils/util';
import { CartService } from '../services/cart.service';
import { CartStore } from '../store/cart.store';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LoadingService]
})
export class CartPage implements OnInit
{
    constructor(
        private cartService: CartService,
        public store: CartStore,
        public loadingService: LoadingService)
    {
    }
    
    async ngOnInit(): Promise<void>
    {
        this.loadingService.isLoading();
        const [courseCart, error] = await tryRunPromise(this.cartService.myCart());
        this.loadingService.stopLoading();
 
        if (courseCart != null && courseCart.length > 0)
        {
            this.store.courseStore.emptyCart();           
            courseCart.forEach(c => this.store.courseStore.addItem(c))
        }
    }

    public changeStep(): void
    {
        this.store.stepStore.nextStep()
    }
}