import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PipeAsyncItensBase } from 'src/app/shared/api/pipe-async-itens.base';
import { CourseResponse } from '../../api/models/course.response';
import { CourseDetailService } from '../../services/course-detail.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CourseDetailService]

})
export class AboutComponent extends PipeAsyncItensBase<CourseResponse>
{
    constructor(
        public route: ActivatedRoute, 
        private service: CourseDetailService)
    {
        super();
        this.getCourse();
    }

    public retry(): void
    {
        this.retryObservable(this.getCourseObservable());
    }

    private getCourse()
    {
        this.getItens(this.getCourseObservable());
    }

    private getCourseObservable()
    {
        const courseId = this.route.snapshot.params["id"];
        
        return this.service.getCourse(courseId);
    }
}