import {Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {CertificateComponent} from './certificate/certificate.component';
import {SettingsComponent} from './settings/settings.component';

export const UniversityRoutes: Routes = [
  {
    path: '',
    redirectTo: 'student'
  },
  {
    path: 'student',
    component: StudentComponent
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
