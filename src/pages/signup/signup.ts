import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SplitPaneProvider } from '../../providers/split-pane/split-pane';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public splitPane: SplitPaneProvider,
    public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  ionViewWillEnter() {
    // Disable the split plane in this page
    this.splitPane.setSplitPane(false);
    this.menuCtrl.swipeEnable(false);
  }

  ionViewWillLeave() {
    // Enable it again when leaving the page
    this.splitPane.setSplitPane(true);
    this.menuCtrl.swipeEnable(true);
  }

}
