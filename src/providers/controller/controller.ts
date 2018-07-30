import { Injectable } from '@angular/core';
import { ToastController, ToastOptions, LoadingController, PopoverController} from 'ionic-angular';

@Injectable()
export class ControllerProvider {

  constructor(
    private toast: ToastController,
    private loader: LoadingController,
    private popCtrl: PopoverController
  ) {
    console.log('Hello ControllerProvider Provider');
  }

  toastCtrl(toastMsg, toastPosition, closeButton){
    let options: ToastOptions = {
      message: toastMsg,
      position: toastPosition,
      showCloseButton: closeButton,
      duration: 1000
    }

    this.toast.create(options).present();
  }

  loadCtrl(val){
    return this.loader.create({
      content: val
    });
  }

  popOver(val) {
    return this.popCtrl.create(val);
  }

  miscPopOver(val, ev) {
    let pop = this.popCtrl.create(val);
    pop.present({ev : ev});
  }



}
