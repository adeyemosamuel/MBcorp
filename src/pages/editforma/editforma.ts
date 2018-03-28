import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-editforma',
  templateUrl: 'editforma.html',
})
export class EditformaPage {
  selectedItem: any;
  id: number;
  iData: any = [];
  stateData: any = [];
  countryData: any = [];
  purposeData:any = [];
  amountData: any =[];
  chargeData: any= []; 
  accountData: any=[];
  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  // hideButton4:boolean=false;
  hideButton5: boolean = false;

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.purposeData= this.appdata.getPurpose();
    this.amountData= this.appdata.getAmount();
    this.chargeData= this.appdata.getCharge();
    this.accountData= this.appdata.getAccount();
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.iData= this.appdata.getID();
    this.selectedItem= this.navParams.get('a');
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

 

  // mikilo4(){
  //   this.hideButton4 = !this.hideButton4;
  // }

  mikilo5() {
    this.hideButton5 = !this.hideButton5;
  }

}
