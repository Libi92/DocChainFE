import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student/student.component';
import {CertificateComponent} from './certificate/certificate.component';
import {RouterModule} from '@angular/router';
import {UniversityRoutes} from './university.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UniversityRoutes)
  ],
  declarations: [StudentComponent, CertificateComponent]
})
export class UniversityModule {
}
