import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitPaneProvider } from '../../providers/split-pane/split-pane';

/**
 * Generated class for the QuotationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotation',
  templateUrl: 'quotation.html',
})
export class QuotationPage {
  tab: string ='list';

  data = [
    {
        rfq: "RFQ123",
        description: "TO FABRICATE, SUPPLY AND INSTALL MILL PF PIPE FOR GF3",
        required: "12/5/2018",
        reply: "12/7/2018",
        close: "5/8/2018"
    },
    {
      rfq: "RFQ7283",
      description: "MRP-CM-0313: TO PURCHASE WIRE ROPE FOR FWES",
      required: "23/03/2018",
      reply: "20/04/2018",
      close: "15/5/2018"
  }
]


  constructor(public navCtrl: NavController, public navParams: NavParams,public splitPane: SplitPaneProvider) {
  }

  ionViewWillEnter() {
    // Enable the split plane in this page
    this.splitPane.setSplitPane(true);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotationPage');
  }

  goToDetail(r){
    console.log(r);
    this.tab='rfq'
  }

}
