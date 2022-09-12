import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionPage } from './page/description.page';
import { ShimmerModule } from 'src/app/shared/components/shimmer/shimmer.module';

@NgModule({
  declarations: [DescriptionPage],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    ShimmerModule
  ]
})
export class DescriptionModule { }