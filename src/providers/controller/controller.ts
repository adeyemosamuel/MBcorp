import { Injectable } from '@angular/core';
import { ToastController, ToastOptions, LoadingController} from 'ionic-angular';

@Injectable()
export class ControllerProvider {

  constructor(
    private toast: ToastController,
    private loader: LoadingController,

  ) {
    console.log('Hello ControllerProvider Provider');
  }

  toastCtrl(toastMsg, toastPosition, closeButton){
    let options: ToastOptions = {
      message: toastMsg,
      position: toastPosition,
      showCloseButton: closeButton,
      duration: 3000
    }

    this.toast.create(options).present();
  }

  loadCtrl(val){
    return this.loader.create({
      content: val
    });
  }



}
