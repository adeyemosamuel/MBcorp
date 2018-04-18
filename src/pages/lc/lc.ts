import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-lc',
  templateUrl: 'lc.html',
})
export class LcPage {
  lcAmount: any;
  selectedItem: any;
  lctype:any;
  money:any;
  account:any;
  charge:any;
  tenor:any;
  country:any;
  accountData:any=[];
  chargeData:any=[];
  lctypeData:any=[];
  moneyData:any=[];
  tenorData:any=[];
  countryData:any=[];
  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  hideButton4: boolean = false;
  hideButton5: boolean = false;
  hideButton6: boolean = false;
  hideButton7: boolean = false;

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem = this.navParams.get('a');
    this.lcAmount=this.navParams.get('lc');
    this.moneyData=this.appdata.getMoney2(); 
    this.chargeData=this.appdata.getCharge();
    this.accountData=this.appdata.getAccount();
    this.tenorData=this.appdata.getTenor();
    this.countryData=this.appdata.getCountry();
    console.log(this.selectedItem);
    console.log(this.lcAmount);
    this.lctypeData=this.appdata.getLC();
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


  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

}
