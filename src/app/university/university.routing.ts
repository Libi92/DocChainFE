import {Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {CertificateComponent} from './certificate/certificate.component';

export const UniversityRoutes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'certificate',
    component: CertificateComponent
  }
];
