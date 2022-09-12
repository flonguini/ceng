import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card.component';
import { ShimmerModule } from '../shimmer/shimmer.module';

@NgModule({
  exports: [CourseCardComponent],
  declarations: [
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    ShimmerModule
  ]
})
export class CourseCardModule { }
