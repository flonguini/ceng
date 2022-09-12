import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PipeAsyncItensBase } from 'src/app/shared/api/pipe-async-itens.base';
import { CourseRatingResponse } from './api/models/course-rating.response';
import { ReviewService } from './services/review.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ReviewService]
})
export class ReviewsComponent extends PipeAsyncItensBase<CourseRatingResponse>
{
    constructor(
        private router: ActivatedRoute,
        private service: ReviewService)
    {
        super();
        this.getCourseReview();
    }

    public retry(): void
    {
        this.retryObservable(this.getCourseObservable());
    }
    
    private getCourseReview(): void
    {
        this.getItens(this.getCourseObservable());
    }

    private getCourseObservable(): Observable<CourseRatingResponse>
    {
        const courseId = this.router.snapshot.parent?.parent?.params['id'];
        return this.service.getReview(courseId)
    }
}