import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CurriculumResponse } from "../api/models/curriculum.response";
import { CURRICULUM_API_ROUTES } from "../api/routes";

@Injectable()
export class CurriculumService
{
    constructor(private http: HttpClient) { }

    public getCurriculum(courseId: string): Observable<CurriculumResponse>
    {
        const endpoint = CURRICULUM_API_ROUTES.curriculum();
        const params = new HttpParams().append('courseId', courseId);
        return this.http.get<CurriculumResponse>(endpoint, {params: params});
    }
}