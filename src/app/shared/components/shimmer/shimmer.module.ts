import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShimmerComponent } from './shimmer.component';

@NgModule({
  exports: [ShimmerComponent],
  declarations: [ShimmerComponent],
  imports: [CommonModule]
})
export class ShimmerModule { }