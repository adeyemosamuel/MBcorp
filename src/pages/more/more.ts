import { Component } from '@angular/core';
import { IonicPage, ViewController,NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController,
    // private store: Storage,
    private viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  logout() {
    // this.viewCtrl.dismiss();
    // this.store.clearStorage('out');
    this.navCtrl.setRoot('LoginPage');
  }

}
