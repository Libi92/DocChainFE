import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student/student.component';
import {CertificateComponent} from './certificate/certificate.component';
import {RouterModule} from '@angular/router';
import {UniversityRoutes} from './university.routing';
import {DemoMaterialModule} from '../demo-material-module';
import {SettingsComponent} from './settings/settings.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UniversityRoutes)
  ],
  declarations: [StudentComponent, CertificateComponent, SettingsComponent]
})
export class UniversityModule {
}
