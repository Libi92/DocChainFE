import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from './settings/settings.component';

export const UserRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];
