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

  rootPage: string = 'LoginPage';

  pages: Array<{ title: string, name: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public splitPane: SplitPaneProvider,
    public _data: ServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', name: 'HomePage', component: 'HomePage' },
      { title: 'List', name: 'ListPage', component: 'ListPage' },
    ];

  }

  initializeApp() {
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
    this._data.getUserCredentials().then(token => {
      this._data.userLogOutHttp(token).subscribe(resp => {
        if (resp['success']) {
          this._data.deleteUserCredential().then(() => {
            this.nav.setRoot('LoginPage');
          })
        }
      }, err => {
        console.log(err);
      })
    });
  }
}
