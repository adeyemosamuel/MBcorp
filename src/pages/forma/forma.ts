import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AppdataProvider } from '../../providers/appdata/appdata';
import { ControllerProvider } from '../../providers/controller/controller';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { Storage } from "@ionic/storage";



@IonicPage()
@Component({
  selector: 'page-forma',
  templateUrl: 'forma.html',
})
export class FormaPage {
  corporateName: any;
  formNumber: any;
  formStatus: any;
  a: any;
  searchTerm: any;
  FormArray: Array<any> = []; 
  arrayViews: Array<any> = [];


  constructor(public navCtrl: NavController,
    private control: ControllerProvider,
    private serverService: ServerServiceProvider,
    // private appdata: AppdataProvider,
    private store: Storage,
    private verify: VerifyServiceProvider,
    public navParams: NavParams) {
  }

  async ionViewDidLoad() {
   this.getFormA();
  }

  async initializeItems() {
   this.getFormA();
  }

  // showSlide() {
  //   this.verify.showToast('Slide left', 'middle');
  // }


  async getFormA() {
    console.log('got here')
    let loader = this.control.loadCtrl('Please wait...');
    loader.present();
    const response = await this.serverService.getData('/v1/formacorp/all');
    this.FormArray = response;

    this.store.set("forma", this.FormArray);
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
      this.FormArray = this.FormArray.filter((item) => {
        return (item.corporateName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // itemTapped(a) {
  //   this.navCtrl.push('EditformaPage', {
  //     a: a
  //   }); 
  // }

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
  }


  fab() {
    this.navCtrl.push('AddformaPage');
  }

  popover(ev, a) {
    this.loadArrayViews(a);
    let pop = this.verify.miscPopOver('PopviewPage', ev, this.arrayViews);
    pop.present({ ev: ev });
    pop.onDidDismiss((data) => {
      if (data === 'Edit') {
        this.navCtrl.push('EditformaPage', {
          a: a
        });
      } else if (data === 'View') {
        this.navCtrl.push('ViewformaPage', {
          a: a
        });
      }
    });
  }

}