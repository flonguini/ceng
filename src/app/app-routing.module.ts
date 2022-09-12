import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FramePage } from './pages/frame/frame.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: '', component: FramePage, children: [
      { path: '', component: HomePage },
      { path: 'about-us', loadChildren: async () => (await import('./features/about-us/about-us.module')).AboutUsModule },
      { path: 'contact', loadChildren: async () => (await import('./features/contact/contact.module')).ContactModule },
      { path: 'help', loadChildren: async () => (await import('./features/help/help.module')).HelpModule },
      { path: 'course-detail', loadChildren: () => import('./features/course-detail/course-detail.module').then(m => m.CourseDetailModule) },
      { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
    ]
  },
  { path: 'certificate/:id', loadChildren: () => import('./features/certificate/certificate.module').then(m => m.CertificateModule) },
  { path: '**', loadChildren: () => import('./features/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }