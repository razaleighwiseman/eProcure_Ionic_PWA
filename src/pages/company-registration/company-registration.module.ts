import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyRegistrationPage } from './company-registration';

@NgModule({
  declarations: [
    CompanyRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyRegistrationPage),
  ],
})
export class CompanyRegistrationPageModule {}
