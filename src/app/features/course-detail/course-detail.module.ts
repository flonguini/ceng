import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailPage } from './pages/course-detail.page';
import { DetailComponent } from './components/detail/detail.component';
import { AboutComponent } from './components/about/about.component';
import { ShimmerModule } from 'src/app/shared/components/shimmer/shimmer.module';
import { RatingModule } from 'src/app/shared/components/rating/rating.module';

@NgModule({
  declarations: [
    CourseDetailPage,
    DetailComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    CourseDetailRoutingModule,
    ShimmerModule,
    RatingModule,
  ]
})
export class CourseDetailModule { }
