import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SplitPaneProvider } from '../providers/split-pane/split-pane';
import { ServiceProvider } from '../providers/service/service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = '';

  pages: Array<{ title: string, name: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public splitPane: SplitPaneProvider,
    public _data: ServiceProvider) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', name: 'UserProfilePage', component: 'UserProfilePage' },
      { title: 'Company Registration', name: 'CompanyRegistrationPage', component: 'CompanyRegistrationPage' },
      { title: 'Quotation', name: 'QuotationPage', component: 'QuotationPage' },
      { title: 'Purchase Order', name: 'PurchaseOrderPage', component: 'PurchaseOrderPage' },
      { title: 'Invoice', name: 'InvoicePage', component: 'InvoicePage' }
    ];

  }

  initializeApp() {
    this._data.getUserToken().then(resp => {
      console.log(resp)
      if (resp != null) {
        console.log("not null")
        this.rootPage = 'UserProfilePage';
      }else{
        this.rootPage = 'LoginPage';
      }
    });
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  isActive(page) {
    // Tabs are a special case because they have their own navigation

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'grays';
    }
    return;
  }

  logOut() {
    this._data.getUserToken().then(token => {
      //console.log(token)
      this._data.userLogOutHttp(token).subscribe(resp => {
        if (resp['success']) {
          this._data.deleteUserToken().then(() => {
            this.nav.setRoot('LoginPage');
          })
        }
      }, err => {
        console.log(err);
      })
    });
  }
}
