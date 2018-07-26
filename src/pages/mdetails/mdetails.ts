import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-mdetails',
  templateUrl: 'mdetails.html',
})
export class MdetailsPage {
  Mikilo: any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.Mikilo = this.navParams.get('send_details');
    console.log(this.navParams.get('send_details'));
  }

}
