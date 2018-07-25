import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';

@IonicPage()
@Component({
  selector: 'page-editrem',
  templateUrl: 'editrem.html',
})
export class EditremPage {
  file: any;
  yes: any;
  no:any;
  selectedItem: any;

  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  hideButton4:boolean=false;
  hideButton5: boolean = false;
  hideButton6:boolean = false;

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // this.moneyData=this.appdata.getMoney2();
    // this.purposeData= this.appdata.getPurpose();
    // this.amountData= this.appdata.getAmount();
    // this.chargeData= this.appdata.getCharge();
    // this.accountData= this.appdata.getAccount();
    // this.stateData = this.appdata.getState();
    // this.countryData = this.appdata.getCountry();
    // this.iData= this.appdata.getID();

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

  mikilo4(){
    this.hideButton4 = !this.hideButton4;
  }

  mikilo5() {
    this.hideButton5 = !this.hideButton5;
  }


  mikilo6() {
    this.hideButton6 = !this.hideButton6;
  }

  isReadonly() {
    return this.isReadonly;   //return true/false
  }

  update(){

  }

  upload(){

  }


}
