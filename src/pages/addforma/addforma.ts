import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { ServerServiceProvider } from '../../providers/server-service/server-service';



@IonicPage()
@Component({
  selector: 'page-addforma',
  templateUrl: 'addforma.html',
})
export class AddformaPage {
  yes: any;
  no: any;
  file: any;
  forexValue: any;
  remittanceInfo: any;
  amountInWords: any;
  chargeAccounts: any;
  transactionDebitAmt: any;
  transferAccounts: any;
  amount: any;
  currencyCode: any;
  purposeOfPaymentDesc: any;
  interBankPoCode: any;
  interBankCtry: any;
  interBankState: any;
  interBankCity: any;
  interBankAddr: any;
  interBankSwiftCode: any;
  interBankName: any;
  beneBankPoCode: any;
  beneBankState: any;
  beneBankCity: any;
  beneBankCtry: any;
  beneBankAddr: any;
  beneBankName: any;
  selectedItem: any;
  beneficiaryAccount: any;
  beneficiaryName: any;
  beneBankSwiftCode: any;
  name: any;
  b: any;
  viewButton: boolean = false;
  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  hideButton4:boolean=false;
  hideButton5: boolean = false;
  hideButton6: boolean = false;
  Data: any = [];


  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private verify: VerifyServiceProvider,
    private appdata: AppdataProvider,
    public modalCtrl: ModalController,
    private serverService: ServerServiceProvider,
    public navParams: NavParams) {
  }

  async ionViewDidLoad() {
    this.selectedItem = this.navParams.get('b');
    this.getData();

    if (this.selectedItem) {
      this.hideButton = !this.hideButton
    }
  }

  async getData(){
    const response = await this.serverService.getData('/v1/formacorp/all');
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

  mikilo4(){
    this.hideButton4 = !this.hideButton4;
  }

  mikilo5() {
    this.hideButton5 = !this.hideButton5;
  }

  mikilo6() {
    this.hideButton6 = !this.hideButton6;
  }

  searchModal() {
    let modal = this.modalCtrl.create('AddformaModalPage');
    modal.present();
  }

  isReadonly() {
    return this.isReadonly;   //return true/false
  }

  upload(){

  }

  submitforma() {

    if (!this.verify.submitforma(this.beneficiaryName,
this.beneficiaryAccount,
this.name,
this.beneBankSwiftCode,
this.beneBankName,
this.beneBankAddr,
this.beneBankCity,
this.beneBankCtry,
this.beneBankState,
this.beneBankPoCode,
this.interBankName,
this.interBankSwiftCode,
this.interBankAddr,
this.interBankCity,
this.interBankState,
this.interBankCtry,
this.interBankPoCode,
this.purposeOfPaymentDesc,
this.currencyCode,
this.amount,
this.transferAccounts,
this.transactionDebitAmt,
this.chargeAccounts,
this.amountInWords,
this.remittanceInfo,
this.forexValue,
this.file)) {
      alert(this.verify.errorMessage);
      this.alertCtrl.create({
        subTitle: 'Message',
        message: this.verify.errorMessage
      }).present();
     return false;
     }
    this.navCtrl.push('SuccessPage');
  }
}
