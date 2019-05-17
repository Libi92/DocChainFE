import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './employee/employee.component';
import {CertificateComponent} from './certificate/certificate.component';
import {RouterModule} from '@angular/router';
import {CompanyRoutes} from './company.routing';
import {SettingsComponent} from './settings/settings.component';
import {DemoMaterialModule} from '../demo-material-module';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from '../shared/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(CompanyRoutes)
  ],
  declarations: [EmployeeComponent, CertificateComponent, SettingsComponent, HomeComponent, UserProfileComponent]
})
export class CompanyModule {
}
