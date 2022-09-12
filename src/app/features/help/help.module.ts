import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccordionModule } from "src/app/shared/components/accordion/accordion.module";
import { CategoryCardModule } from "src/app/shared/components/category-card/category-card.module";
import { TitleSubtitleModule } from "src/app/shared/components/title-subtitle/title-subtitle.module";
import { HelpCardComponent } from "./components/help-card/help-card.component";
import { HelpRoutingModule } from "./help-routing.module";
import { HelpComponent } from "./help.component";

@NgModule({
  declarations: [
    HelpComponent,
    HelpCardComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    CategoryCardModule,
    TitleSubtitleModule,
    AccordionModule
  ]
})
export class HelpModule { }
