import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PipeAsyncItensBase } from 'src/app/shared/api/pipe-async-itens.base';
import { CourseCommentResponse } from '../../api/models/course-comment.response';
import { ReviewService } from '../../services/review.service';

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ReviewService]
})
export class ReviewComponent extends PipeAsyncItensBase<CourseCommentResponse[]>
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

    private getCourseObservable(): Observable<CourseCommentResponse[]>
    {
        const courseId = this.router.snapshot.parent?.parent?.params['id'];
        return this.service.getComments(courseId)
    }
}