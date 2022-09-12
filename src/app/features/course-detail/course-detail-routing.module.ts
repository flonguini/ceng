import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailPage } from './pages/course-detail.page';

const routes: Routes = [
    {
        path: ':id', component: CourseDetailPage, children: [
            {
                path: 'description',
                loadChildren: async () => (await import('./modules/description/description.module')).DescriptionModule,
                data: {Name: 'Descrição'}
            },
            {
                path: 'curriculum',
                loadChildren: async () => (await import('./modules/curriculum/curriculum.module')).CurriculumModule,
                data: {Name: 'Currículo'}
            },
            {
                path: 'faq',
                loadChildren: async () => (await import('./modules/faq/faq.module')).FaqModule,
                data: {Name: 'FAQ'}
            },
            {
                path: 'reviews',
                loadChildren: async () => (await import('./modules/reviews/reviews.module')).ReviewsModule,
                data: {Name: 'Avaliações'}
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseDetailRoutingModule { }