import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';

@IonicPage()
@Component({
  selector: 'page-editformnxp',
  templateUrl: 'editformnxp.html',
})
export class EditformnxpPage {
  selectedItem: any;
  a: any;
  stateData: any = [];
  countryData: any = [];
  cityData: any = [];
  methodData: any = [];
  domiciliaryData: any = [];
  formpurposeData: any = [];
  chargeData: any = [];
  prefixData: any = [];
  accountData: any = [];
  currencyData: any = [];
  dischargeData: any = [];
  shipmentData: any = [];
  viewButton: boolean = false;
  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  hideButton4: boolean = false;
  hideButton5: boolean = false;
  hideButton6: boolean = false;
  hideButton7: boolean = false;
  hideButton8: boolean = false;


  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController,
    private appdata: AppdataProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.cityData = this.appdata.getCity();
    this.methodData = this.appdata.getMethod();
    this.shipmentData = this.appdata.getShipment();
    this.dischargeData = this.appdata.getDischarge();
    this.currencyData = this.appdata.getCurrency();
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

  view() {
    this.viewButton = !this.viewButton;
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
    this.hideButton6 = !this.hideButton6;
  }

  mikilo8() {
    this.hideButton6 = !this.hideButton6;
  }


  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

  itemTapped(){
    let modal = this.modalCtrl.create('ModalPage');
    modal.present();
  }

}
