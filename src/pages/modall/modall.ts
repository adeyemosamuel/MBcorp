import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import { AppdataProvider } from '../../providers/appdata/appdata';

@IonicPage()
@Component({
  selector: 'page-modall',
  templateUrl: 'modall.html',
})
export class ModallPage {
  docType: any='';
  selectedItem: any;
  mamayo:any=[];

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    // private appdata: AppdataProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mamayo = this.navParams.get('selectedItem');
    this.docType=this.navParams.get('docType');

  }
 
  selectCancel() { 
    this.viewCtrl.dismiss('');
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

}
