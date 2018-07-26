import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { ServerServiceProvider } from '../../providers/server-service/server-service';

@IonicPage()
@Component({
  selector: 'page-addformnxp-modal',
  templateUrl: 'addformnxp-modal.html',
})
export class AddformnxpModalPage {
  searchTerm: string='';
  bname:any;
   bdata:Array<any>=[];
  _data: any;

   constructor(public navCtrl: NavController,
     public viewCtrl:ViewController,
     private appdata: AppdataProvider,
     private serverService: ServerServiceProvider,
     public navParams: NavParams) {
   }

   async ionViewDidLoad() {
     this.getbNameLists();
    }

   async getbNameLists(){
    const response = await this.serverService.getData('/v1/formnxp/all');
    this.bdata = response;
    this._data= response;
    console.log(this.bdata);
    }


    selectCancel(){
      this.viewCtrl.dismiss('');
    }

    itemTapped(b){
      this.navCtrl.push('AddformnxpPage', {
        b:b
      });
    }

    initializeItems(){
      this.bdata= this._data
    }

    getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.bdata = this.bdata.filter((item) => {
          return (item.bname.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

}
