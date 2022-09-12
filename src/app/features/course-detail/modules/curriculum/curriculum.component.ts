import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PipeAsyncItensBase } from 'src/app/shared/api/pipe-async-itens.base';
import { CurriculumResponse } from './api/models/curriculum.response';
import { CurriculumService } from './services/curriculum.service';

@Component({
    selector: 'app-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.scss'],
    providers: [CurriculumService]
})
export class CurriculumComponent extends PipeAsyncItensBase<CurriculumResponse>
{
    constructor(
        private service: CurriculumService,
        private router: ActivatedRoute) 
    {
        super();
        this.getCourseCurriculum();
    }

    public retry(): void
    {
        this.retryObservable(this.getCourseObservable());
    }
    
    private getCourseCurriculum(): void
    {
        this.getItens(this.getCourseObservable());
    }

    private getCourseObservable(): Observable<CurriculumResponse>
    {
        const courseId = this.router.snapshot.parent?.parent?.params['id'];
        return this.service.getCurriculum(courseId)
    }
}