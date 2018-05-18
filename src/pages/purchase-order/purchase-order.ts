import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitPaneProvider } from '../../providers/split-pane/split-pane';

/**
 * Generated class for the PurchaseOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-order',
  templateUrl: 'purchase-order.html',
})
export class PurchaseOrderPage {
  tab: string = 'list';
  visability: boolean = false;

  data = [
    {
      po: "POQ123",
      description: "TO FABRICATE, SUPPLY AND INSTALL MILL PF PIPE FOR GF3",
      company: "Comm-it",
      ordered: "12/7/2018",
      required: "5/8/2018",
      cost: "RM12134456"
    },
    {
      po: "POQ123",
      description: "TO FABRICATE, SUPPLY AND INSTALL MILL PF PIPE FOR GF3",
      company: "Tnb",
      ordered: "12/7/2018",
      required: "5/8/2018",
      cost: "RM12134456"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public splitPane: SplitPaneProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseOrderPage');
  }

  ionViewWillEnter() {
    // Disable the split plane in this page
    this.splitPane.setSplitPane(true);
  }

  goToDetail(r) {
    console.log(r);
    this.tab = 'po'

  }

  hide() {
    if (this.tab === 'list') {
      return false;
    }
    else {
      return true;
    }

  }

}
