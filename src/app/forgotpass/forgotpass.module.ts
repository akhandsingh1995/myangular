import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotpassRoutingModule } from './forgotpass-routing.module';
import { ForgotpassComponent } from './forgotpass.component';


@NgModule({
  declarations: [ForgotpassComponent],
  imports: [
    CommonModule,
    ForgotpassRoutingModule
  ]
})
export class ForgotpassModule { }
