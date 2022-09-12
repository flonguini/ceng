import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorMessageComponent } from './form-error-message.component';

@NgModule({
  exports:[FormErrorMessageComponent],
  declarations: [FormErrorMessageComponent],
  imports: [CommonModule]
})
export class FormErrorMessageModule { }
