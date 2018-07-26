import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NdetailsPage } from './ndetails';

@NgModule({
  declarations: [
    NdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NdetailsPage),
  ],
})
export class NdetailsPageModule {}
