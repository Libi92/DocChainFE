import {Routes} from '@angular/router';

import {FullComponent} from './layouts/full/full.component';
import {LoginComponent} from './login/login.component';
import {LandingComponent} from './landing/landing.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/starter',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      }
    ]
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];
