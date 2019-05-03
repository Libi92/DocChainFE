import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './employee/employee.component';
import {CertificateComponent} from './certificate/certificate.component';
import {RouterModule} from '@angular/router';
import {CompanyRoutes} from './company.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CompanyRoutes)
  ],
  declarations: [EmployeeComponent, CertificateComponent]
})
export class CompanyModule {
}
