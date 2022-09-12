import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DESCRIPTION_API_ROUTES } from "../api/description-api.routes";
import { DescriptionResponse } from "../models/description.response";

@Injectable()
export class DescriptionService
{
    constructor(private http: HttpClient){}

    public getDescription(courseId: string): Observable<DescriptionResponse>
    {
        const httpParams = new HttpParams().append('courseId', courseId);
        const apiUrl = DESCRIPTION_API_ROUTES.description();
        return this.http.get<DescriptionResponse>(apiUrl, {params: httpParams});
    }
}