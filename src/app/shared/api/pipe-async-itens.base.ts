import { HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, Observable, of } from "rxjs";

export abstract class PipeAsyncItensBase<T>
{
    public itens$: Observable<T>;
    protected errorSubject = new BehaviorSubject<HttpErrorResponse | null>(null);
    public error$ = this.errorSubject.asObservable();

    protected getItens(observable: Observable<T>)
    {
        this.itens$ = observable
            .pipe(
                catchError((err: HttpErrorResponse) => this.handleError(err))
            );
    }

    protected retryObservable(observable: Observable<T>)
    {
        this.getItens(observable);
        this.errorSubject.next(null);
    }

    private handleError(err: HttpErrorResponse)
    {
        // TODO: log error
        this.errorSubject.next(err)
        return of()
    }
}