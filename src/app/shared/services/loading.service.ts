import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoadingService
{
    private loading: boolean = false;
    public loadingSubject = new BehaviorSubject<boolean>(this.loading);
    public loading$ = this.loadingSubject.asObservable();

    public isLoading(): void
    {
        this.loading = true;
        this.updateSubject();
    }

    public stopLoading(): void
    {
        this.loading = false;
        this.updateSubject();
    }

    public toggle()
    {
        this.loading = !this.isLoading;
        this.updateSubject();
    }

    private updateSubject()
    {
        this.loadingSubject.next(this.loading);
    }
}