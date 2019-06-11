import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {UserRoutes} from './user.routing';
import {DemoMaterialModule} from '../demo-material-module';
import {SettingsComponent} from './settings/settings.component';
import {UserProfileComponent} from '../shared/user-profile/user-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [HomeComponent, UserProfileComponent, SettingsComponent]
})
export class UserModule {
}
