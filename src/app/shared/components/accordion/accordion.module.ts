import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { ShimmerModule } from '../shimmer/shimmer.module';

@NgModule({
    exports: [AccordionComponent],
    declarations: [AccordionComponent],
    imports: [CommonModule, ShimmerModule]
})
export class AccordionModule { }