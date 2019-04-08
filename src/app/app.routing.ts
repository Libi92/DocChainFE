import {Routes} from '@angular/router';

import {FullComponent} from './layouts/full/full.component';
import {LoginComponent} from './login/login.component';
import {LandingComponent} from './landing/landing.component';
import {IndexComponent} from './index/index.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './starter/starter.module#StarterModule'
      }
    ]
  }
];
