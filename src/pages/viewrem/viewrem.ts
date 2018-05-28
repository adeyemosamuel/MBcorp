import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-viewrem',
  templateUrl: 'viewrem.html',
})
export class ViewremPage {

  selectedItem: any;
  hideButton: boolean = false;
  hideButton2: boolean = false; 
  hideButton3: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem= this.navParams.get('a');
    if (this.selectedItem) {
      this.hideButton = !this.hideButton
    }
  }

  mikilo() {
    this.hideButton = !this.hideButton;
  }

  mikilo2() {
    this.hideButton2 = !this.hideButton2;
  }

  mikilo3() {
    this.hideButton3 = !this.hideButton3;
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

}
