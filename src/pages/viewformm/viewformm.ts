import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-viewformm',
  templateUrl: 'viewformm.html',
})
export class ViewformmPage {
  selectedItem: any;
  a:any;
  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  hideButton4: boolean = false;
  hideButton5: boolean = false;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem = this.navParams.get('a');
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

  isReadonly() {
    return this.isReadonly;   //return true/false
  }

  itemTapped(selectedItem, doctype){
    let modal = this.modalCtrl.create('ModallPage', {
      selectedItem:selectedItem.items,
      docType: doctype
    });
    modal.present();
  }

  details(){
    this.navCtrl.push('MdetailsPage', {
      send_details:this.selectedItem,
    });
    console.log(this.selectedItem);
  }


}
