import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorMessageModule } from 'src/app/shared/components/form-error-message/form-error-message.module';
import { LoadingButtonModule } from 'src/app/shared/components/loading-button/loading-button.module';
import { ShimmerModule } from 'src/app/shared/components/shimmer/shimmer.module';
import { SvgModule } from 'src/app/shared/svg/svg.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartStepsComponent } from './components/cart-steps/cart-steps.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartStepItemComponent } from './components/cart/cart-step-item/cart-step-item.component';
import { CartTotalsComponent } from './components/cart/cart-totals/cart-totals.component';
import { CupomComponent } from './components/cart/cupom/cupom.component';
import { FinishedComponent } from './components/finished/finished.component';
import { IdComponent } from './components/id/id.component';
import { CartPage } from './pages/cart.page';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    CartPage,
    CupomComponent,
    CartItemComponent,
    CartTotalsComponent,
    CartStepsComponent,
    CartStepItemComponent,
    IdComponent,
    FinishedComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SvgModule,
    ReactiveFormsModule,
    FormErrorMessageModule,
    LoadingButtonModule,
    ShimmerModule
  ],
  providers: [CartService]
})
export class CartModule { }
