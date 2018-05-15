import { PopoverPage } from './../pages/popover/popover';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Popover } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { SplitPaneProvider } from '../providers/split-pane/split-pane';


@NgModule({
  declarations: [
    MyApp,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // IonicModule.forRoot(MyApp, {
    //   locationStrategy: 'path'
    // }),
    IonicStorageModule.forRoot(),
    HttpClientModule, HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    HttpClientModule,
    SplitPaneProvider
  ]
})
export class AppModule {}
