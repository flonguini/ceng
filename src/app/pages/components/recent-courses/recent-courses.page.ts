import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { CourseCard } from 'src/app/shared/components/course-card/course-card';
import { HOME_ENDPOINTS } from '../../api/endpoints';

@Component({
    selector: 'app-recent-courses',
    templateUrl: './recent-courses.page.html',
    styleUrls: ['./recent-courses.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentCoursesPage implements OnInit
{
    public courses$: Observable<CourseCard[]>;
    private errorSubject = new Subject<HttpErrorResponse>();
    public error$ = this.errorSubject.asObservable();

    constructor(private http: HttpClient) { }

    ngOnInit(): void
    {
        this.courses$ = this.http.get<CourseCard[]>(HOME_ENDPOINTS.recentCourses())
            .pipe(
                catchError((err: HttpErrorResponse) => {
                this.errorSubject.next(err)
                return of()
            }))
    }
}