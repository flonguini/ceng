import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum.component';
import { ShimmerModule } from 'src/app/shared/components/shimmer/shimmer.module';


@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    ShimmerModule
  ]
})
export class CurriculumModule { }