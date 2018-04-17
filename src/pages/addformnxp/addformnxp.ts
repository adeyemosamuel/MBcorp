import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-addformnxp',
  templateUrl: 'addformnxp.html',
})
export class AddformnxpPage {
  selectedItem: any;
  b: any;
  name: any;
  address: any;
  city: any;
  states: any;
  phone: any;
  nepc: any;
  rcnumber: any;
  method: any;
  cfname: any;
  clname: any;
  caddress: any;
  countries: any;
  fname: any;
  lname: any;
  account: any;
  domiciliary: any;
  domammount: any;
  formpurpose: any;
  pincode: any;
  charge: any;
  prefix: any;
  date: any;
  sdate: any;
  shipment: any;
  pdate: any;
  discharge: any;
  proforma: any;
  description: any;
  quantity: any;
  weight: any;
  currency: any;
  fob: any;
  cf: any;
  hs: any;
  gross: any;
  goods: any;
  freight: any;
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
  itemDetails: boolean = false;
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
    public modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem = this.navParams.get('b');
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.cityData = this.appdata.getCity();
    this.methodData = this.appdata.getMethod();
    this.shipmentData = this.appdata.getShipment();
    this.dischargeData = this.appdata.getDischarge();
    this.currencyData = this.appdata.getCurrency();
    if (this.selectedItem) {
      this.hideButton2 = !this.hideButton2
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

  searchModal() {
    let modal = this.modalCtrl.create('AddformnxpModalPage');
    modal.present();
  }

  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

  details(){
   this.itemDetails= !this.itemDetails;
  }

}
