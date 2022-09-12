import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { TitleSubtitleModule } from 'src/app/shared/components/title-subtitle/title-subtitle.module';
import { OurProfessorsComponent } from './components/our-professors/our-professors.component';
import { MissionVisionValuesComponent } from './components/mission-vision-values/mission-vision-values.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    OurProfessorsComponent,
    MissionVisionValuesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    TitleSubtitleModule
  ]
})
export class AboutUsModule { }
