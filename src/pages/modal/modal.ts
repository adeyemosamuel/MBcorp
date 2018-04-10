import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';




@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  selectedItem2: any;
  selectedItem: any;
  mamayo:any=[];
   


  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    private appdata: AppdataProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem2 = this.navParams.get('selectedItem');
    this.mamayo= this.appdata.getInfo();

  } 

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  } 

}
