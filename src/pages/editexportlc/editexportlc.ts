import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-editexportlc',
  templateUrl: 'editexportlc.html',
})
export class EditexportlcPage {
  selectedItem: any;
  a: any;
  date: any;
  shipdate: any;
  fileupload: any;
  yes: any;
  no: any; 
  transferable: any;
  resolving: any;
  standby: any;
  back: any;
  red: any;
  deferred: any;
  pship: any;
  tship: any;
  uwb: any;
  ubb: any;
  revoakble: any;
  irrevokable: any;
  fbrn: any;
  caccountData:any=[];
  paccountData:any=[];
  dctData:any=[];
  etownData:any=[];
  estateData:any=[];
  ccountryData:any=[];
  cincData:any=[];
  cbData:any=[];
  psystemData:any=[];
  ptenorData:any=[];
  borneData:any=[];
  validData:any=[];
  cexpiryData:any=[];
  cityData:any=[];
  goodsoriginData:any=[];
  termsData:any=[];
  modeData:any=[];
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
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
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

  mikilo8() {
    this.hideButton8 = !this.hideButton8;
  }


  isReadonly() {
    return this.isReadonly;   //return true/false 
  }

}
