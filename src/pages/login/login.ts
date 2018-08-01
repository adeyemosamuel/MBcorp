import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ControllerProvider } from '../../providers/controller/controller';



@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    userName: string = '';
    passWord: string = '';
    disableButton: boolean = false;



    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private toastCtrl: ToastController,
        public control: ControllerProvider,
        private store: Storage,
        private server: ServerServiceProvider) {


    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    validateInput(val){
      if (this.userName.trim != null && this.passWord != ''){
        this.disableButton = false;
      }else{
        this.disableButton = true;
      }
    }

    async Login() {
        let loader = this.control.loadCtrl('Please wait...');
        loader.present();

        let body = {
            userName: this.userName,
            passWord:this.passWord
        };

        try {
            let response = await this.server.processData(body, '/user/Signin');
            console.log(response);
            if (response.status === '00') {
              this.control.toastCtrl(response.message, 'middle', false);
                this.store.set('token', response.data.token);
                this.navCtrl.push('TabsPage');
            } else if (response.status == '99') {
              this.control.toastCtrl(response.message, 'middle', false);
            } else if(response.status == '100'){
              this.control.toastCtrl(response.message, 'middle', false);
            } else{
              this.control.toastCtrl("Login Failed. Please try again", 'middle', false);
            }


        } catch (err) {
            console.log(err);
        // this.createToaster('Unable to login. Try again later.');
        }

        loader.dismiss();
    }

    forgot(){
        this.navCtrl.push('ForgotPage');
    }


     // Toast Creation Method
  createToaster(msg){

    let toaster = this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      closeButtonText: 'OK',
      cssClass: 'toastStyle',
      position: 'middle'
    });
    toaster.present();
  }



}
