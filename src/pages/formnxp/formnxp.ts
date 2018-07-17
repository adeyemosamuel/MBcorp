import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { ControllerProvider } from '../../providers/controller/controller';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-formnxp',
  templateUrl: 'formnxp.html',
})
export class FormnxpPage {
  name: any;
  formnumber: any;
  status: any;
  date: any;
  a: any;
  searchTerm: any;
  FormNXP: Array<any> = [];
  arrayViews: Array<any> = []; 

  constructor(public navCtrl: NavController,
    private control: ControllerProvider,
    private serverService: ServerServiceProvider,
    private store: Storage,
    // private appdata: AppdataProvider,
    private verify: VerifyServiceProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getFormNXP();
  }

  initializeItems() {
    this.getFormNXP();
  }

  // showSlide() {
  //   this.verify.showToast('Slide left', 'middle');
  // }

  async getFormNXP() {
    console.log('got here')
    let loader = this.control.loadCtrl('Please wait...');
    loader.present();
    const response = await this.serverService.getData('/v1/formnxp/all');
    this.FormNXP = response;

    this.store.set("formnxp", this.FormNXP);
    console.log(response);

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
      this.FormNXP = this.FormNXP.filter((item) => {
        return (item.exporterName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // itemTapped(a) {
  //   this.navCtrl.push('EditformaPage', {
  //     a: a
  //   }); 
  // }

  fab() {
    this.navCtrl.push('AddformnxpPage');
  }

  loadArrayViews(a) {
    if (a.status === 'A') {
      this.arrayViews = ['View'];
    };

    if (a.status === 'S') {
      this.arrayViews = ['View', 'Edit'];
    };

    if (a.status === 'P') {
      this.arrayViews = ['View', 'Edit']
    };

    if (a.status === 'D') {
      this.arrayViews = ['View', 'Edit']
    };
  }

  popover(ev, a) {
    this.loadArrayViews(a);
    let pop = this.verify.miscPopOver('PopviewPage', ev, this.arrayViews);
    pop.present({ ev: ev });
    pop.onDidDismiss((data) => {
      if (data=== 'Edit') {
        this.navCtrl.push('EditformnxpPage', {
          a: a
        });
      } else if (data=== 'View') {
        this.navCtrl.push('ViewformnxpPage', {
          a: a
        });
      }
    });
  }
}
