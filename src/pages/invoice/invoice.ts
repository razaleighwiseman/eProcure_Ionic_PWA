import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitPaneProvider } from '../../providers/split-pane/split-pane';

/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public splitPane: SplitPaneProvider) {
  }

  ionViewWillEnter() {
    // Enable the split plane in this page
    this.splitPane.setSplitPane(true);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }

}
