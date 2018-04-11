import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';




@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  Mikilo: any=[];
  docType: any='';
  selectedItem: any;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    private appdata: AppdataProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.Mikilo = this.navParams.get('selectedItem');
    this.docType=this.navParams.get('docType');
    console.log(this.Mikilo);
    console.log(this.docType);
  } 

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  } 



}
