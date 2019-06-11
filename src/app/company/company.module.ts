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
import { HireEmployeeComponent } from './hire-employee/hire-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CompanyRoutes)
  ],
  declarations: [EmployeeComponent, CertificateComponent, SettingsComponent,
    HomeComponent, UserProfileComponent, HireEmployeeComponent]
})
export class CompanyModule {
}
