import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';



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
  FormArray: Array<any> = [];
  arrayViews: Array<any> = [];


  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
    private verify: VerifyServiceProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.FormArray = this.appdata.getInfo();
  }

  initializeItems() {
    this.FormArray = this.appdata.getInfo();
  }

  showSlide() {
    this.verify.showToast('Slide left', 'middle');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.FormArray = this.FormArray.filter((item) => {
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
    if (a.status === 'Approved'){
      this.arrayViews=['View'];
    };
 
    if (a.status ==='Submitted'){
      this.arrayViews=['View', 'Edit'];
    };
 
    if (a.status ==='Saved'){
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
