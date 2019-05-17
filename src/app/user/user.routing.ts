import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const UserRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
