import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, ToastOptions, PopoverController } from 'ionic-angular';

@Injectable()
export class VerifyServiceProvider {
  toastOptions: ToastOptions;
  errorMessage: string;

  constructor(public http: HttpClient,
    private popCtrl: PopoverController,
    private toastCtrl: ToastController, ) {
    console.log('Hello VerifyServiceProvider Provider');
  }

  submitforma(bname, baccount, name, bbswiftcode, bbname, bbaddress, bbcity,bbcountry, bbstate, bbpostalcode, ibname, ibswiftcode, ibaddress, ibcity, ibstate, ibcountry, ibpostalcode, payment, money, amount, transfer, estimated, charge, applied, info, valid, fileupload): boolean {
    // if (bname == null || bname == '') {
    //   this.errorMessage = 'Beneficiary name is required';
    //   return false;
    // }

    // if (name == null || name == '') {
    //   this.errorMessage = 'Account name is required';
    //   return false;
    // }

    // if (baccount == null || baccount == '') {
    //   this.errorMessage = 'Account Number is required';
    //   return false;
    // }

    // if (bbswiftcode == null || bbswiftcode == '') {
    //   this.errorMessage = 'Swift Code is required';
    //   return false;
    // }

    // if (bbname == null || bbname == '') {
    //   this.errorMessage = 'Beneficiary bank name is required';
    //   return false;
    // }

    // if (bbaddress == null || bbaddress == '') {
    //   this.errorMessage = 'Beneficiary bank address is required';
    //   return false;
    // }

    // if (bbcity == null || bbcity == '') {
    //   this.errorMessage = 'Beneficiary bank city is required';
    //   return false;
    // }

    // if (bbcountry == null || bbcountry == '') {
    //   this.errorMessage = 'Beneficiary bank country is required';
    //   return false;
    // }

    // if (bbstate == null || bbstate == '') {
    //   this.errorMessage = 'Beneficiary bank state is required';
    //   return false;
    // }

    // if (bbpostalcode == null || bbpostalcode == '') {
    //   this.errorMessage = 'Beneficiary bank postal code is required';
    //   return false;
    // }

    if (payment == null || payment == '') {
      this.errorMessage = 'Select Purpose of Payment'; 
      return false;
    }

    if (amount == null || amount == '') {
      this.errorMessage = 'Enter Amount'; 
      return false;
    }

    if (charge == null || charge == '') {
      this.errorMessage = 'Select Charge Account'; 
      return false;
    }

    if (applied == null || applied == '') {
      this.errorMessage = 'Enter amount applied in words'; 
      return false;
    }

    if (valid == null || valid == '') {
      this.errorMessage = 'Select Valid for Forex'; 
      return false;
    }

    if (transfer == null || transfer == '') {
      this.errorMessage = 'Select Transfer Account'; 
      return false;
    }

    if (estimated == null || estimated == '') {
      this.errorMessage = 'Enter Estimated Debit Amount'; 
      return false;
    }

    if (fileupload == null || fileupload == '') {
      this.errorMessage = 'Attach files'; 
      return false;
    }

    return true;
  }




  showToast(toastMsg, position) {
    this.toastOptions = {
      message: toastMsg,
      duration: 3000,
      position: position
    };
    this.toastCtrl.create(this.toastOptions).present();
  }

  miscPopOver(val, ev, data) {
    let pop = this.popCtrl.create(val, {
      data: data
    });
    return pop;
  }

}
