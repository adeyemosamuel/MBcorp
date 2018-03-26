import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html', 
})
export class TabsPage {
  Dashboard: any = 'DashboardPage';
  Addform: any = 'AddformsPage';
  More: any = 'MorePage'; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

}
