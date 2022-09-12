import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card.component';

@NgModule({
  exports:[CategoryCardComponent],
  declarations: [CategoryCardComponent],
  imports: [CommonModule]
})
export class CategoryCardModule { }