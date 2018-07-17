import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { ControllerProvider } from '../../providers/controller/controller';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-formm',
  templateUrl: 'formm.html',
})
export class FormmPage {
  name: any;
  formnumber: any;
  status: any;
  date: any;
  a: any;
  searchTerm: any;
  FormM: Array<any> = [];
  arrayViews: Array<any> = [];

  constructor(public navCtrl: NavController,
    private control: ControllerProvider,
    private serverService: ServerServiceProvider,
    // private appdata: AppdataProvider,
    private store: Storage,
    private verify: VerifyServiceProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getFormM();
  }

  initializeItems() {
    this.getFormM();
  }

  async getFormM() {
    console.log('got here')
    let loader = this.control.loadCtrl('Please wait...');
    loader.present();
    const response = await this.serverService.getData('/v1/formm/all');
    this.FormM = response;
    console.log(response);
    this.store.set("formm", this.FormM);
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
      this.FormM = this.FormM.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // itemTapped(a) {
  //   this.navCtrl.push('EditformaPage', {
  //     a: a
  //   }); 
  // }

  loadArrayViews(a){
    if (a.status === 'A'){
      this.arrayViews=['View'];
    };
 
    if (a.status ==='S'){
      this.arrayViews=['View'];
    };
 
    if (a.status ==='P'){
      this.arrayViews=['View']
    };

    if (a.status ==='R'){
      this.arrayViews=['View']
    };
  }


  popover(ev, a) {
    this.loadArrayViews(a);
    let pop = this.verify.miscPopOver('PopviewPage', ev, this.arrayViews);
    pop.present({ ev: ev });
    pop.onDidDismiss((data) => {
      if (data=== 'View') {
        this.navCtrl.push('ViewformmPage', {
          a: a
        });
      }
    });
  }
}
