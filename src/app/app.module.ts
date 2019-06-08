import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppRoutes} from './app.routing';
import {AppComponent} from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FullComponent} from './layouts/full/full.component';
import {AppHeaderComponent} from './layouts/full/header/header.component';
import {AppSidebarComponent} from './layouts/full/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './demo-material-module';

import {SharedModule} from './shared/shared.module';
import {SpinnerComponent} from './shared/spinner.component';
import {LoginComponent} from './login/login.component';
import {LandingComponent} from './landing/landing.component';
import {IndexComponent} from './index/index.component';
import {SwiperModule} from 'angular2-useful-swiper';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {RegisterComponent} from './register/register.component';
import {DialogCertificateComponent} from './shared/dialog-certificate/dialog-certificate.component';
import {ConfirmDialogComponent} from './shared/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    LoginComponent,
    LandingComponent,
    IndexComponent,
    RegisterComponent,
    DialogCertificateComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    SwiperModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  entryComponents: [DialogCertificateComponent, ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
