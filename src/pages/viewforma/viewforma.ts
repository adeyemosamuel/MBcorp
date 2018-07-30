import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerProvider } from '../../providers/controller/controller';



@IonicPage()
@Component({
  selector: 'page-viewforma',
  templateUrl: 'viewforma.html',
})
export class ViewformaPage {

  selectedItem: any;
  hideButton: boolean = false;
  hideButton2: boolean = false;
  hideButton3: boolean = false;
  constructor(public navCtrl: NavController,
    private controller: ControllerProvider, public navParams: NavParams) {
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

  isReadonly() {
    return this.isReadonly;   //return true/false
  }

  popover(ev) {
    this.controller.miscPopOver('PopoverPage', ev);
  }

}
