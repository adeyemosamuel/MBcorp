import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
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
