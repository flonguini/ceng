import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import { RatingModule } from 'src/app/shared/components/rating/rating.module';
import { RatingCountComponent } from './components/rating-count/rating-count.component';
import { ReviewComponent } from './components/review/review.component';
import { DateOnlyToText } from './pipes/date-only-to-text.pipe';
import { ShimmerModule } from 'src/app/shared/components/shimmer/shimmer.module';
import { LoadingReviewComponent } from './components/loading-review/loading-review.component';


@NgModule({
  declarations: [
    ReviewsComponent,
    RatingCountComponent,
    ReviewComponent,
    DateOnlyToText,
    LoadingReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    RatingModule,
    ShimmerModule
  ]
})
export class ReviewsModule { }
