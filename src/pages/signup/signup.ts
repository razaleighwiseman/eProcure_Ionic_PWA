import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SplitPaneProvider } from '../../providers/split-pane/split-pane';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';
import { regexValidators } from '../validators/validator';

import {User} from '../../models/user.model';

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

  signUpForm: FormGroup;
  model: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public splitPane: SplitPaneProvider,
    public menuCtrl: MenuController, public _form: FormBuilder, public _data: ServiceProvider) {

    this.signUpForm = this._form.group({
      email: [
        '', Validators.compose([
          Validators.pattern(regexValidators.email),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.pattern(regexValidators.password),
          Validators.required
        ])
      ],
      name: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      nric: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      contact: [
        '', Validators.compose([
          Validators.required
        ])
      ],

    });
  }

  createAcc(){
    console.log(this.model);
    this._data.createUserHttp(this.model).subscribe(resp =>{
      console.log(resp);
      if (resp['success']) {
        this.navCtrl.setRoot('LoginPage');
      }
    });
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
