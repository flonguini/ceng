import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularPlugin } from "@microsoft/applicationinsights-angularplugin-js";
import { ApplicationInsights, IDependencyTelemetry, IEventTelemetry, IExceptionTelemetry, IMetricTelemetry, IPageViewPerformanceTelemetry, IPageViewTelemetry, ITelemetryItem, ITelemetryPlugin, ITraceTelemetry } from "@microsoft/applicationinsights-web";
import { environment } from "src/environments/environment";

@Injectable()
export class AppInsightsService
{
    private appInsights: ApplicationInsights;

    constructor(private router: Router)
    {
        const angularPlugin = new AngularPlugin();

        this.appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: environment.applicationInsights,
                enableAutoRouteTracking: true,
                extensions: [angularPlugin],
                extensionConfig: {
                    [angularPlugin.identifier]: {
                        router: this.router,
                        errorServices: [new ErrorHandler()]
                    },
                },
            },
        });

        this.appInsights.loadAppInsights();
    }
    
    trackEvent(event: IEventTelemetry, customProperties?: { [key: string]: any; }): void
    {
        this.appInsights.trackEvent(event, customProperties);
    }
    
    trackPageView(pageView: IPageViewTelemetry): void
    {
        this.appInsights.trackPageView(pageView)
    }
    
    trackException(exception: IExceptionTelemetry, customProperties?: { [key: string]: any; }): void
    {
        this.appInsights.trackException(exception, customProperties);
    }
    
    trackTrace(trace: ITraceTelemetry, customProperties?: { [key: string]: any; }): void
    {
        this.appInsights.trackTrace(trace, customProperties);
    }
    
    trackMetric(metric: IMetricTelemetry, customProperties?: { [key: string]: any; }): void
    {
        this.appInsights.trackMetric(metric, customProperties);
    }
    
    startTrackPage(name?: string): void
    {
        this.appInsights.startTrackPage(name);
    }
    
    stopTrackPage(name?: string, url?: string, customProperties?: Object): void
    {
        this.appInsights.stopTrackPage(name, url, customProperties)
    }
    
    startTrackEvent(name: string): void
    {
        this.appInsights.startTrackEvent(name);
    }
    
    stopTrackEvent(name: string, properties?: Object, measurements?: Object): void
    {
        this.stopTrackEvent(name, properties, measurements);
    }
    
    addTelemetryInitializer(telemetryInitializer: (item: ITelemetryItem) => boolean | void): void
    {
        this.appInsights.addTelemetryInitializer(telemetryInitializer);
    }
    
    trackPageViewPerformance(pageViewPerformance: IPageViewPerformanceTelemetry): void
    {
        this.appInsights.trackPageViewPerformance(pageViewPerformance);
    }
    
    trackDependencyData(dependency: IDependencyTelemetry): void
    {
        this.appInsights.trackDependencyData(dependency);
    }
}