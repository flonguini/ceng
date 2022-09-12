import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseCommentResponse } from '../api/models/course-comment.response';
import { CourseRatingResponse } from '../api/models/course-rating.response';
import { RATING_API_ROUTES } from '../api/routes';

@Injectable()
export class ReviewService
{
    constructor(private http: HttpClient) { }

    public getReview(courseId: string): Observable<CourseRatingResponse>
    {
        const endpoint = RATING_API_ROUTES.rating();
        const params = new HttpParams().append('courseId', courseId);
        return this.http.get<CourseRatingResponse>(endpoint, {params: params});
    }

    public getComments(courseId: string): Observable<CourseCommentResponse[]>
    {
        const endpoint = RATING_API_ROUTES.comments();
        const params = new HttpParams().append('courseId', courseId);
        return this.http.get<CourseCommentResponse[]>(endpoint, {params: params});
    }
}