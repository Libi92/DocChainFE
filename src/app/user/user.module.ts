import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {UserRoutes} from './user.routing';
import {DemoMaterialModule} from '../demo-material-module';
import {SettingsComponent} from './settings/settings.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {UserProfileComponent} from '../shared/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [HomeComponent, SettingsComponent],
  entryComponents: [UserProfileComponent]
})
export class UserModule {
}
