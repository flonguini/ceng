import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CourseCard } from 'src/app/shared/components/course-card/course-card';
import { PipeAsyncItensBase } from 'src/app/shared/api/pipe-async-itens.base';
import { HOME_ENDPOINTS } from '../../api/endpoints';

@Component({
    selector: 'app-best-courses',
    templateUrl: './best-courses.component.html',
    styleUrls: ['./best-courses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestCoursesComponent extends PipeAsyncItensBase<CourseCard[]> implements OnInit 
{
    constructor(private http: HttpClient)
    { 
        super(); 
    }

    ngOnInit(): void
    {
        const courses$ = this.http.get<CourseCard[]>(HOME_ENDPOINTS.bestCourses());
        this.getItens(courses$);
    }
}