import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableDebugTools } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production)
    enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule)
    .then((moduleRef: any) =>
    {
        const applicationRef = moduleRef.injector.get(ApplicationRef);
        const componentRef = applicationRef.components[0];
        // allows to run `ng.profiler.timeChangeDetection();`
        enableDebugTools(componentRef);
    })
    .catch((err: any) => console.error(err));
