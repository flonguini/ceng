import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.page.html',
    styleUrls: ['./course-detail.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailPage 
{
    public get routes(): any
    {
        return this.route?.routeConfig?.children
    }

    constructor(public route: ActivatedRoute) { }
}