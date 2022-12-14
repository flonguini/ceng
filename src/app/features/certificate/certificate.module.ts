import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateComponent } from './certificate.component';
import { DotComponent } from './dot/dot.component';


@NgModule({
  declarations: [
    CertificateComponent,
    DotComponent
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule
  ]
})
export class CertificateModule { }
