import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PipeAsyncItensBase } from 'src/app/shared/api/pipe-async-itens.base';
import { Accordion } from 'src/app/shared/components/accordion/accordion';
import { FaqService } from './services/faq.service';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FaqService]
})
export class FaqComponent extends PipeAsyncItensBase<Accordion[]>
{
    constructor(
        private service: FaqService, 
        private router: ActivatedRoute) 
    {
        super(); 
        this.getCourseFaq();
    }

    public retry(): void
    {
        this.retryObservable(this.getCourseObservable());
    }
    
    private getCourseFaq(): void
    {
        this.getItens(this.getCourseObservable());
    }

    private getCourseObservable(): Observable<Accordion[]>
    {
        const courseId = this.router.snapshot.parent?.parent?.params['id'];
        return this.service.faq(courseId)
    }
}