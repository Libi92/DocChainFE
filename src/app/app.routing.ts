import {Routes} from '@angular/router';

import {FullComponent} from './layouts/full/full.component';
import {LoginComponent} from './login/login.component';
import {LandingComponent} from './landing/landing.component';
import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './register/register.component';

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
      },
      {
        path: 'register',
        component: RegisterComponent
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
  },
  {
    path: 'home',
    component: FullComponent,
    children: [
      {
        path: 'university',
        loadChildren: './university/university.module#UniversityModule'
      },
      {
        path: 'company',
        loadChildren: './company/company.module#CompanyModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  }
];
