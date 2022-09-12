import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRating } from './rating';

@NgModule({
  exports: [NgbRating],
  declarations: [NgbRating],
  imports: [
    CommonModule
  ]
})
export class RatingModule { }
