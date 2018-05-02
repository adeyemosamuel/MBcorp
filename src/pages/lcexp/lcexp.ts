import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-lcexp',
  templateUrl: 'lcexp.html',
})
export class LcexpPage {

  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  hideButton4: boolean = false;
  hideButton5: boolean = false;
  hideButton6: boolean = false;
  hideButton7: boolean = false;
  hideButton8: boolean = false;

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
     public navParams: NavParams) {
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad LcexpPage');
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

  mikilo4() {
    this.hideButton4 = !this.hideButton4;
  }

  mikilo5() {
    this.hideButton5 = !this.hideButton5;
  }

  mikilo6() {
    this.hideButton6 = !this.hideButton6;
  }

  mikilo7() {
    this.hideButton7 = !this.hideButton7;
  }

  mikilo8(){ 
    this.hideButton8 = !this.hideButton8;
  }


  isReadonly() {
    return this.isReadonly;   //return true/false 
  }


}
