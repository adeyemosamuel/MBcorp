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

  submitforma(beneficiaryName, beneficiaryAccount, name, beneBankSwiftCode, beneBankName, beneBankAddr, beneBankCity,beneBankCtry, beneBankState, beneBankPoCode, interBankName, interBankSwiftCode, interBankAddr, interBankCity, interBankState, interBankCtry, interBankPoCode, purposeOfPaymentDesc, currencyCode, amount, transferAccounts, transactionDebitAmt, chargeAccounts, amountInWords, remittanceInfo, forexValue, file): boolean {


    if (purposeOfPaymentDesc == null || purposeOfPaymentDesc == '') {
      this.errorMessage = 'Select Purpose of Payment';
      return false;
    }

    if (amount == null || amount == '') {
      this.errorMessage = 'Enter Amount';
      return false;
    }

    if (chargeAccounts == null || chargeAccounts == '') {
      this.errorMessage = 'Select Charge Account';
      return false;
    }

    if (amountInWords == null || amountInWords == '') {
      this.errorMessage = 'Enter amount applied in words';
      return false;
    }

    if (forexValue == null || forexValue == '') {
      this.errorMessage = 'Select Valid for Forex';
      return false;
    }

    if (transferAccounts == null || transferAccounts == '') {
      this.errorMessage = 'Select Transfer Account';
      return false;
    }

    if (transactionDebitAmt == null || transactionDebitAmt == '') {
      this.errorMessage = 'Enter Estimated Debit Amount';
      return false;
    }

    if (file == null || file == '') {
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
