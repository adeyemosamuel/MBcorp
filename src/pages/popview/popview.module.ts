import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopviewPage } from './popview';

@NgModule({
  declarations: [
    PopviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PopviewPage),
  ],
})
export class PopviewPageModule {}
