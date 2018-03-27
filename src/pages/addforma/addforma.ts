import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-addforma',
  templateUrl: 'addforma.html',
})
export class AddformaPage {
  selectedItem: any;
  baccount:any;
  bname:any;
  bbswiftcode:any;
  name:any;
  b:any;
  hideButton:boolean=false;
  hideButton2:boolean=false;
  hideButton3:boolean=false;
  hideButton4:boolean=false;
  hideButton5:boolean=false;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem= this.navParams.get('b');
  }
  mikilo(){
    this.hideButton = !this.hideButton;
  }

  mikilo2(){
    this.hideButton2 = !this.hideButton2;
  }

  mikilo3(){
    this.hideButton3 = !this.hideButton3;
  }
 
  mikilo4(){
    this.hideButton4 = !this.hideButton4;
  }

  mikilo5(){
    this.hideButton5 = !this.hideButton5;
  }

  searchModal(){
    let modal = this.modalCtrl.create('AddformaModalPage');
    modal.present();
   }

   isReadonly() {
    return this.isReadonly;   //return true/false 
  }
}
