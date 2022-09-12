import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseCard } from './course-card';
@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent 
{
    @Input()
    public isLoading: boolean = false;

    @Input()
    public course: CourseCard;

    constructor(private router: Router) { }

    public goToCourseDetail(course: CourseCard): void
    {
        this.router.navigateByUrl('course-detail/' + course.id + "/description")
    }
}