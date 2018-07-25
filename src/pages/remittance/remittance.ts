import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { ControllerProvider } from '../../providers/controller/controller';
import { Storage } from "@ionic/storage";



@IonicPage()
@Component({
  selector: 'page-remittance',
  templateUrl: 'remittance.html',
})
export class RemittancePage {
  name: any;
  formnumber: any;
  status: any;
  date: any;
  a: any;
  searchTerm: any;
  FormREM: Array<any> = [];
  arrayViews: Array<any> = [];


  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
    private verify: VerifyServiceProvider,
    private serverService: ServerServiceProvider,
    private control: ControllerProvider,
    private store: Storage,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getFormREM();
  }

  initializeItems() {
   this.getFormREM();
  }

  // showSlide() {
  //   this.verify.showToast('Slide left', 'middle');
  // }

  async getFormREM() {
    console.log('got here')
    let loader = this.control.loadCtrl('Please wait...');
    loader.present();
    // const response = await this.serverService.getData('/v1/remittance/all');
    // this.FormREM = response;

    // this.store.set("remittance", this.FormREM);
    // console.log(response);

    this.store.get('remittance').then((val) => {
      this.FormREM = val;
      console.log(this.FormREM);
    });

    loader.dismiss();

    //referenced here
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.FormREM = this.FormREM.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // itemTapped(a) {
  //   this.navCtrl.push('EditformaPage', {
  //     a: a
  //   });
  // }

  fab() {
    this.navCtrl.push('AddremPage');
  }

  loadArrayViews(a){
    if (a.status === 'A'){
      this.arrayViews=['View'];
    };

    if (a.status ==='S'){
      this.arrayViews=['View', 'Edit'];
    };

    if (a.status ==='P'){
      this.arrayViews=['View', 'Edit']
    };

    if (a.status ==='R'){
      this.arrayViews=['View', 'Edit']
    };

    if (a.status ==='D'){
      this.arrayViews=['View', 'Edit']
    };
  }

  popover(ev, a) {
    this.loadArrayViews(a);
    let pop = this.verify.miscPopOver('PopviewPage', ev,  this.arrayViews);
    pop.present({ ev: ev });
    pop.onDidDismiss((data) => {
      if (data=== 'Edit') {
        this.navCtrl.push('EditremPage', {
          a: a
        });
      } else if (data === 'View') {
        this.navCtrl.push('ViewremPage', {
          a: a
        });
      }
    });
  }

}
