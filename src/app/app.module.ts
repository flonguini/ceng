import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { FramePage } from './pages/frame/frame.page';
import { FooterComponent } from './pages/components/footer/footer.component';
import { MenuComponent } from './pages/components/menu/menu.component';
import { BlogComponent } from './pages/components/blog/blog.component';
import { WhatYouWillLearnComponent } from './pages/components/what-you-will-learn/what-you-will-learn.component';
import { TitleSubtitleModule } from './shared/components/title-subtitle/title-subtitle.module';
import { WhatYouWillLearnCardComponent } from './pages/components/what-you-will-learn-card/what-you-will-learn-card.component';
import { CourseCardModule } from './shared/components/course-card/course-card.module';
import { BestCoursesComponent } from './pages/components/best-courses/best-courses.component';
import { RecentCoursesPage } from './pages/components/recent-courses/recent-courses.page';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationinsightsAngularpluginErrorService } from '@microsoft/applicationinsights-angularplugin-js';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CartComponent } from './pages/components/menu/cart/cart.component';
import { CoreModule } from './core/core.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    FramePage,
    FooterComponent,
    MenuComponent,
    BlogComponent,
    WhatYouWillLearnComponent,
    WhatYouWillLearnCardComponent,
    BestCoursesComponent,
    RecentCoursesPage,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleSubtitleModule,
    CourseCardModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    {
      
      provide: ErrorHandler,
      useClass: ApplicationinsightsAngularpluginErrorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }