import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-addforms',
  templateUrl: 'addforms.html',
})
export class AddformsPage {

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

}
