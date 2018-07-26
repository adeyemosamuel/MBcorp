import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { ServerServiceProvider } from '../../providers/server-service/server-service';



@IonicPage()
@Component({
  selector: 'page-addformnxp',
  templateUrl: 'addformnxp.html',
})
export class AddformnxpPage {
  yes: any;
  no:any;
  file: any;
  selectedItem: any;
  b: any;

  exporterName:any;
  exporterAddress:any;
  exporterCity:any;
  exporterState:any;
  exporterPhone:any;
  exporterNepcReg:any;
  exporterRcNo:any;
  methodOfPayment:any;
  congCity:any;
  congState:any;
  congCountry:any;
  otherFirstName:any;
  otherLastName:any;
  otherAddress:any;
  otherCity:any;
  otherState:any;
  otherCountry:any;
  transferAccount:any;
  chargeAccount:any;
  domAcct:any;
  domAmt:any;
  formPurposeCode:any;
  prefix:any;
  pincode:any;
  dueDatePay:any;
  shippedOn:any;
  portOfDestination:any;
  expectedPortShipment:any;
  proformaNo:any;
  proformaDate:any;
  goodsDescription:any;
  totalQuantity:any;
  noOfItems:any;
  totalNetweight:any;
  totalGrossWeight:any;
  currencyCode:any;
  totalValueOfGoods:any;
  totalFOB:any;
  totalFreightFOB:any;
  totalFC:any;
  hsCode:any;
  sectoralPurpose:any;
  unitMeasure:any;
  fobvalue:any;
  frieghtCharge:any;
  unitPrice:any;
  quantity:any;
  modeOfPackaging:any;
  netWeight:any;
  grossWeight:any;


  Data: any = [];
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
    private serverService: ServerServiceProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem = this.navParams.get('b');
    if (this.selectedItem) {
      this.hideButton2 = !this.hideButton2
    }
  }

  async getData(){
    const response = await this.serverService.getData('/v1/formnxp/all');
    this.Data = response;
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

  details() {
    this.itemDetails = !this.itemDetails;
  }

  upload(){

  }

  submit(){

  }

}
