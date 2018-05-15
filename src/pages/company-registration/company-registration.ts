import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitPaneProvider } from '../../providers/split-pane/split-pane';

/**
 * Generated class for the CompanyRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-registration',
  templateUrl: 'company-registration.html',
})
export class CompanyRegistrationPage {

  tab: string ='company';
  data = [
    {
        name: "Muhammad",
        contact: "013-5627188",
        email: "mhmmd@yahoo.com",
        account: "Life Insurance"
    },
    {
        name: "Dolah",
        contact: "017-8393692",
        email: "dolah@yahoo.com",
        account: "Food City"
    }
]

  constructor(public navCtrl: NavController, public navParams: NavParams,public splitPane: SplitPaneProvider) {
  }

  ionViewWillEnter() {
    // Enable the split plane in this page
    this.splitPane.setSplitPane(true);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  nextPage(tab){
    console.log(tab);
  }

}
