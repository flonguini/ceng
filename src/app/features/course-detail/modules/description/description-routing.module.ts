import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionPage } from './page/description.page';

const routes: Routes = [
    { path: '', component: DescriptionPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DescriptionRoutingModule { }