import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { SplitPaneProvider } from '../../providers/split-pane/split-pane';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { regexValidators } from '../validators/validator';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  private email: string;
  private password: string;
  private error: string;
  credentialsForm: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, public _data: ServiceProvider,
    public splitPane: SplitPaneProvider,
    public menuCtrl: MenuController,
    public _form: FormBuilder) {

    this.credentialsForm = this._form.group({
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
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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

  ngOnInit() {
    this.checkUserLogin();

  }

  checkUserLogin() {
    this._data.getUserCredentials().then(resp => {
      console.log(resp)
      if (resp) {
        this.navCtrl.setRoot('HomePage');
      }
    });
  }

  logIn() {
    if (this.credentialsForm.valid) {
      var email =this.credentialsForm.controls['email'].value;
      var password = this.credentialsForm.controls['password'].value;
      console.log(email, password)
      this._data.userSignInHttp({ 'email': email, 'password': password }).subscribe(resp => {
        if (resp) {
          console.log(resp['token']);
          this._data.storeUserCredentials(resp['token'])
          this.navCtrl.setRoot('HomePage');
        }
      }, err => {
        this.error = err.error.msg;

      });
    }

  }
  
  goToLogin(): void {
    console.log("login")
    this.navCtrl.push('SignupPage')
  }
}
