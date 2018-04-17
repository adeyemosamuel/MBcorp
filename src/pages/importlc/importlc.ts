import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';


@IonicPage()
@Component({
  selector: 'page-importlc',
  templateUrl: 'importlc.html',
})
export class ImportlcPage {
  formnumber: any;
  money:any;
  amount:any;
  mformsData: any = [];
  moneyData:any=[];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.mformsData = this.appdata.getInfo();
    this.moneyData=this.appdata.getMoney2(); 
  }

  validate(){
    this.navCtrl.push('LcPage');
  }

}
