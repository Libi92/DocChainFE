import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {UserRoutes} from './user.routing';
import {DemoMaterialModule} from '../demo-material-module';
import {UserProfileComponent} from '../shared/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [HomeComponent, UserProfileComponent]
})
export class UserModule {
}
