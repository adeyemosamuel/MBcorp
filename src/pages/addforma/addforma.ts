import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';



@IonicPage()
@Component({
  selector: 'page-addforma',
  templateUrl: 'addforma.html',
})
export class AddformaPage {
  fileupload: any;
  valid: any;
  info: any;
  applied: any;
  charge: any;
  estimated: any;
  transfer: any;
  amount: any;
  money: any;
  payment: any;
  ibpostalcode: any;
  ibcountry: any;
  ibstate: any;
  ibcity: any;
  ibaddress: any;
  ibswiftcode: any;
  ibname: any;
  bbpostalcode: any;
  bbstate: any;
  bbcountry: any;
  bbcity: any;
  bbaddress: any;
  bbname: any;
  selectedItem: any;
  baccount: any;
  bname: any;
  bbswiftcode: any;
  name: any;
  b: any;
  viewButton: boolean = false;
  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  hideButton4:boolean=false;
  hideButton5: boolean = false;
  hideButton6: boolean = false;
  moneyData:any=[];
  iData: any = [];
  stateData: any = [];
  countryData: any = [];
  purposeData:any = [];
  amountData: any =[];
  chargeData: any= []; 
  accountData: any=[];

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private verify: VerifyServiceProvider,
    private appdata: AppdataProvider,
    public modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem = this.navParams.get('b');
    this.moneyData=this.appdata.getMoney2();
    this.purposeData= this.appdata.getPurpose();
    this.amountData= this.appdata.getAmount();
    this.chargeData= this.appdata.getCharge();
    this.accountData= this.appdata.getAccount();
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.iData= this.appdata.getID();
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

  submitforma() {

    if (!this.verify.submitforma(this.bname,
this.baccount,
this.name,
this.bbswiftcode,
this.bbname,
this.bbaddress,
this.bbcity,
this.bbcountry,
this.bbstate,
this.bbpostalcode,
this.ibname,
this.ibswiftcode,
this.ibaddress,
this.ibcity,
this.ibstate,
this.ibcountry,
this.ibpostalcode,
this.payment,
this.money,
this.amount,
this.transfer,
this.estimated,
this.charge,
this.applied,
this.info,
this.valid,
this.fileupload)) {
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
