import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accordion } from 'src/app/shared/components/accordion/accordion';
import { FAQ_API_ROUTES } from '../api/faq-api.routes';

@Injectable()
export class FaqService
{

    constructor(private http: HttpClient) { }

    public faq(courseId: string): Observable<Accordion[]>
    {
        const endpoint = FAQ_API_ROUTES.faq();
        const params = new HttpParams().append('courseId', courseId);
        return this.http.get<Accordion[]>(endpoint, {params: params});
    }
}
