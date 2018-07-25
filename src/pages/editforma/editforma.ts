import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-editforma',
  templateUrl: 'editforma.html',
})
export class EditformaPage {
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
    // private appdata: AppdataProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {


    this.selectedItem= this.navParams.get('a');
    console.log(this.selectedItem)
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
