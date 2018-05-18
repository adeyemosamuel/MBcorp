import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuaranteePage } from './guarantee';

@NgModule({
  declarations: [
    GuaranteePage,
  ],
  imports: [
    IonicPageModule.forChild(GuaranteePage),
  ],
})
export class GuaranteePageModule {}
