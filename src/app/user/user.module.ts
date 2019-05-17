import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {UserRoutes} from './user.routing';
import {DemoMaterialModule} from '../demo-material-module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [HomeComponent]
})
export class UserModule {
}
