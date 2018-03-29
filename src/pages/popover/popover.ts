import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
a:any;
  constructor(public navCtrl: NavController,
    private viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  itemTapped(a) {
    this.viewCtrl.dismiss(a);
  }

}
