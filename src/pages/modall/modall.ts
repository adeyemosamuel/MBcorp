import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modall',
  templateUrl: 'modall.html',
})
export class ModallPage {
  selectedItem2: any;
  selectedItem: any;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem2 = this.navParams.get('selectedItem');

  }

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

}
