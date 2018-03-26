import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VerifyServiceProvider {

  errorMessage: string;

  constructor(public http: HttpClient) {
    console.log('Hello VerifyServiceProvider Provider');
  }

  verifyNext(name, address, town, countries, states, phone,email,postcode, airline,ticket, route, identification, idnumber, comments): boolean {
    if (name == null || name == '') {
      this.errorMessage = 'Name is required'; 
      return false;
    }

    if (address == null || address == '') {
      this.errorMessage = 'Fill in the address';
      return false;
    }

    if (phone == '' || phone == null) {
      this.errorMessage = 'Enter phone number';
      return false;
    }

    if (email == '' || email == null) {
      this.errorMessage = 'Enter Valid Email Address';
      return false;
    }

  
    if (identification == '' || identification == null) {
      this.errorMessage = 'Mode of identification is required';
      return false;
    }

    if (states == '' || states == null) {
      this.errorMessage = 'Select a state';
      return false;
    }

    if (countries == '' || countries == null) {
      this.errorMessage = 'Select a country';
      return false;
    }

    if (town == '' || town == null) {
      this.errorMessage = 'Fill in the town';
      return false;
    }

    if (idnumber == '' || idnumber == null) {
      this.errorMessage = 'Enter Valid ID Number';
      return false;
    }

    return true;
  }

  verifyNext2(bname,baddress,bphone,baccount,bcountries,bpostcode): boolean{
    if (bname == null || bname == '') {
      this.errorMessage = 'Beneficiary name is required'; 
      return false;
    }

    if (baddress == null || baddress == '') {
      this.errorMessage = 'Fill in the address'; 
      return false;
    }
    return true;
  }

  verifyNext3(payment,amount,charge,applied,info,valid,transfer,estimated): boolean{
    if (payment == null || payment == '') {
      this.errorMessage = 'Select Purpose of Payment'; 
      return false;
    }

    if (amount == null || amount == '') {
      this.errorMessage = 'Select Amount'; 
      return false;
    }

    if (charge == null || charge == '') {
      this.errorMessage = 'Select Charge Amount'; 
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
    return true;
  }


  verifyFormNXP(name,address,city,states,phone,nepc,rcnumber,method,cfname, clname,caddress,countries): boolean{
    if (name == null || name == '') {
      this.errorMessage = 'Enter Full name'; 
      return false;
    }

    if (address == null || address == '') {
      this.errorMessage = 'Enter Address'; 
      return false;
    }

    if (city == null || city == '') {
      this.errorMessage = 'Select a city'; 
      return false;
    }

    if (states == null || states == '') {
      this.errorMessage = 'Select a state'; 
      return false;
    }


    if (phone == null || phone == '') {
      this.errorMessage = 'Enter Valid Phone Number'; 
      return false;
    }

    if (nepc == null || nepc == '') {
      this.errorMessage = 'Enter NEPC Reg No'; 
      return false;
    }

    if (rcnumber == null || rcnumber == '') {
      this.errorMessage = 'Enter RC Number'; 
      return false;
    }

    if (method == null || method == '') {
      this.errorMessage = 'Select Method of Payment'; 
      return false;
    }

    if (cfname == null || cfname == '') {
      this.errorMessage = 'Enter Consignee First Name'; 
      return false;
    }

    if (clname == null || clname == '') {
      this.errorMessage = 'Enter Consignee Last Name'; 
      return false;
    }

    if (caddress == null || caddress == '') {
      this.errorMessage = 'Enter Consignee Address'; 
      return false;
    }

    if (countries == null || countries == '') {
      this.errorMessage = 'Select Consignee Country'; 
      return false;
    }
    return true;
  }


  verifyFormNXP2(fname,
    lname,
    address,
    city,
    states,
    countries,
    account,
    domiciliary,
    domammount,
    formpurpose,
    pincode,
    charge,
    prefix,
    date): boolean{
    if (account == null || account == '') {
      this.errorMessage = 'Select Transfer Account'; 
      return false;
    }

    if (formpurpose == null || formpurpose == '') {
      this.errorMessage = 'Select Form Purpose Code'; 
      return false;
    }

    if (pincode == null || pincode == '') {
      this.errorMessage = 'Enter Pin Code'; 
      return false;
    }

    if (charge == null || charge == '') {
      this.errorMessage = 'Select Charge Account'; 
      return false;
    }


    if (domammount == null || domammount == '') {
      this.errorMessage = 'Enter Domiciliary Amount'; 
      return false;
    }

    if (prefix == null || prefix == '') {
      this.errorMessage = 'Select Prefix'; 
      return false;
    }

   
    return true;
  }


  verifyFormNXP3(sdate,
    shipment,
    pdate,
    discharge,
    proforma,
    description,
    quantity,
    weight,
    currency,
    fob,
    cf,
    hs,
    gross,
    goods,
    freight): boolean{
    if (sdate == null || sdate == '') {
      this.errorMessage = 'Select Shipment Date'; 
      return false;
    }

    if (shipment == null || shipment == '') {
      this.errorMessage = 'Select Expected Port of Shipment'; 
      return false;
    }

    if (discharge == null || discharge == '') {
      this.errorMessage = 'Select Port of destination/discharge'; 
      return false;
    }

    if (description == null || description == '') {
      this.errorMessage = 'Enter goods description'; 
      return false;
    }


    if (quantity == null || quantity == '') {
      this.errorMessage = 'Enter Total Quantity'; 
      return false;
    }

    if (weight == null || weight == '') {
      this.errorMessage = 'Enter Weight Value'; 
      return false;
    }


    if (currency == null || currency == '') {
      this.errorMessage = 'Select Currency'; 
      return false;
    }


    if (fob == null || fob == '') {
      this.errorMessage = 'Enter FOB Value'; 
      return false;
    }


    if (cf == null || cf == '') {
      this.errorMessage = 'Enter Total C & F Value'; 
      return false;
    }


    if (hs == null || hs == '') {
      this.errorMessage = 'Enter No of items expected'; 
      return false;
    }


    if (gross == null || gross == '') {
      this.errorMessage = 'Enter Gross Weight/Mass'; 
      return false;
    }


    if (goods == null || goods == '') {
      this.errorMessage = 'Enter Total Value of Goods'; 
      return false;
    }


    if (freight == null || freight == '') {
      this.errorMessage = 'Enter Total Freight Charges'; 
      return false;
    }

   
    return true;
  }

}
