import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppInsightsService } from 'src/app/shared/services/app-insights.service';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    providers: [AppInsightsService]
})
export class HomePage 
{
    constructor(
        private router: Router,
        private insights: AppInsightsService
    )
    {
        this.insights.trackPageView({name: "foo"})
        this.insights.trackEvent({name: "foo"})
    }
}