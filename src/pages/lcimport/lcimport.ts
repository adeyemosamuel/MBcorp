import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-lcimport',
  templateUrl: 'lcimport.html',
})
export class LcimportPage {

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

 loadArrayViews(a){
   if (a.status === 'Approved'){
     this.arrayViews=['View Details', 'Swift Message', 'Import Document'];
   };

   if (a.status ==='Submitted'){
     this.arrayViews=['View Details'];
   };

   if (a.status ==='Saved'){
     this.arrayViews=['View Details', 'Edit Details']
   };
 }
  
  popover(ev, a) {
    this.loadArrayViews(a);
    let pop = this.verify.miscPopOver('PopviewPage', ev, this.arrayViews);
    pop.present({ ev: ev });
    pop.onDidDismiss((data) => {
      if (data=== 'View Details') {
        this.navCtrl.push('ViewlcimportPage', {
          a: a
        });
      } else if(data=== 'Edit Details'){
        this.navCtrl.push('EditimportlcPage',{
          a: a
        });
      } else if(data==='Swift Message'){
        this.navCtrl.push('ViewswiftmsgPage',{
          a:a
        });
      } else if(data==='Import Document'){
        this.navCtrl.push('ImportlcdocPage',{
          a:a
        });
      }
    });
  }

  fab(){
    this.navCtrl.push('ImportlcPage');
  }

}
