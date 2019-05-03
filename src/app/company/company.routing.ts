import {Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {CertificateComponent} from './certificate/certificate.component';

export const CompanyRoutes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'certificate',
    component: CertificateComponent
  }
];
