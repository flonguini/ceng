import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PipeAsyncItensBase } from 'src/app/shared/api/pipe-async-itens.base';
import { DescriptionResponse } from '../models/description.response';
import { DescriptionService } from '../services/description.services';

@Component({
    selector: 'app-description',
    templateUrl: './description.page.html',
    styleUrls: ['./description.page.scss'],
    providers: [DescriptionService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionPage extends PipeAsyncItensBase<DescriptionResponse>
{
    constructor(
        private service: DescriptionService, 
        private route: ActivatedRoute) 
    { 
        super();
        this.getCourseDescription();
    }

    public retry(): void
    {
        this.retryObservable(this.getCourseObservable());
    }
    
    private getCourseDescription(): void
    {
        this.getItens(this.getCourseObservable());
    }

    private getCourseObservable(): Observable<DescriptionResponse>
    {
        const courseId = this.route.snapshot.parent?.parent?.params['id'];
        return this.service.getDescription(courseId)
    }
}