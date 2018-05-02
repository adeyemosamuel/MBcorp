import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-addexportlc',
  templateUrl: 'addexportlc.html',
})
export class AddexportlcPage {
  a:any;
  lc:any;
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
    console.log(this.formnumber),
    console.log(this.lc),
    this.navCtrl.push('LcexpPage',{
      a:this.formnumber,
      lc:this.lc
    });
  }

}
