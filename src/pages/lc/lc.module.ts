import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LcPage } from './lc';

@NgModule({
  declarations: [
    LcPage,
  ],
  imports: [
    IonicPageModule.forChild(LcPage),
  ],
})
export class LcPageModule {}
