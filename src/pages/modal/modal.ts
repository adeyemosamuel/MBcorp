import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, 
    public viewCtrl:ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  selectCancel(){
    this.viewCtrl.dismiss('');
  }

}
