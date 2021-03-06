import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LcexportPage } from '../lcexport/lcexport';


@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  forma(){
    this.navCtrl.push('FormaPage');
  }

  remittance(){
    this.navCtrl.push('RemittancePage');
  }

  formnxp(){
    this.navCtrl.push('FormnxpPage');
  }

  formm(){
    this.navCtrl.push('FormmPage');
  }

  importlc(){
    this.navCtrl.push('LcimportPage');
  }

  exportlc(){
    this.navCtrl.push('LcexportPage');
  }
}
