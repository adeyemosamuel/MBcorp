import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-popview',
  templateUrl: 'popview.html',
})
export class PopviewPage {

  constructor(public navCtrl: NavController,
    private viewCtrl: ViewController, public navParams: NavParams) {
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopviewPage');
    console.log(this.navParams.get('data'));
  }

  itemTapped(a) {
    this.viewCtrl.dismiss(a);
  }

}
