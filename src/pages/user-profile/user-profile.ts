import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitPaneProvider } from '../../providers/split-pane/split-pane';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  tab: string ='user';

  constructor(public navCtrl: NavController, public navParams: NavParams,public splitPane: SplitPaneProvider) {
  }

  ionViewWillEnter() {
    // Enable the split plane in this page
    this.splitPane.setSplitPane(true);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }



}
