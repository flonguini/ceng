import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { TitleSubtitleModule } from 'src/app/shared/components/title-subtitle/title-subtitle.module';
import { CategoryCardModule } from 'src/app/shared/components/category-card/category-card.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ContactComponent, ContactFormComponent],
    imports: [
        CommonModule,
        ContactRoutingModule,
        TitleSubtitleModule,
        CategoryCardModule,
        ReactiveFormsModule
    ]
})
export class ContactModule { }