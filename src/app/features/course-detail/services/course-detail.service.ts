import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CourseResponse } from "../api/models/course.response";
import { InfoResponse } from "../api/models/info.response";
import { HOME_API_ROUTES } from "../api/routes";

@Injectable()
export class CourseDetailService
{
    constructor(private http: HttpClient) { }

    public getCourse(courseId: string): Observable<CourseResponse>
    {
        const apiRoute = HOME_API_ROUTES.course();
        const httpParam = new HttpParams().append("courseId", courseId);
        return this.http.get<CourseResponse>(apiRoute, {params: httpParam});
    }

    public getInfo(courseId: string): Observable<InfoResponse>
    {
        const apiRoute = HOME_API_ROUTES.info();
        const httpParam = new HttpParams().append("courseId", courseId);
        return this.http.get<InfoResponse>(apiRoute, {params: httpParam});
    }
}