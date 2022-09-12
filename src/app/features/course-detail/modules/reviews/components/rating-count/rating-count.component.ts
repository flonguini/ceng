import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TotalRatingVm } from '../../api/models/course-rating.response';

@Component({
    selector: 'app-rating-count',
    templateUrl: './rating-count.component.html',
    styleUrls: ['./rating-count.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class RatingCountComponent 
{
    @Input()
    public ratings: TotalRatingVm[]
}