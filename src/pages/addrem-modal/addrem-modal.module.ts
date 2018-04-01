import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddremModalPage } from './addrem-modal';

@NgModule({
  declarations: [
    AddremModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddremModalPage),
  ],
})
export class AddremModalPageModule {}
