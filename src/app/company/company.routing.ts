import {Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {CertificateComponent} from './certificate/certificate.component';
import {SettingsComponent} from './settings/settings.component';

export const CompanyRoutes: Routes = [
  {
    path: '',
    redirectTo: 'employee'
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'certificate',
    component: CertificateComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];
