import {Injectable} from '@angular/core';
import {AppConstants} from '../../app.constants';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  {state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer'},
  {state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5'},
  {state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy'},
  {state: 'lists', type: 'link', name: 'Lists', icon: 'view_list'},
  {state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline'},
  {state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab'},
  {state: 'stepper', type: 'link', name: 'Stepper', icon: 'web'},
  {
    state: 'expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center'
  },
  {state: 'chips', type: 'link', name: 'Chips', icon: 'vignette'},
  {state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail'},
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal'
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  {state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant'},
  {state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb'},
  {state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode'},
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }
];

const UNIVERSITY_MENU = [
  {state: 'university/student', name: 'Students', type: 'link', icon: 'person_outline'},
  {state: 'university/certificate', name: 'Certificates', type: 'link', icon: 'view_comfy'},
  {state: 'university/settings', name: 'Settings', type: 'link', icon: 'av_timer'}
];

const COMPANY_MENU = [
  {state: 'company/home', name: 'Home', type: 'link', icon: 'home'},
  {state: 'company/employee', name: 'Employee', type: 'link', icon: 'person_outline'},
  // {state: 'company/certificate', name: 'Certificates', type: 'link', icon: 'view_comfy'},
  {state: 'company/settings', name: 'Settings', type: 'link', icon: 'av_timer'}
];

const USER_MENU = [
  {state: 'user', name: 'Home', type: 'link', icon: 'person_outline'},
  {state: 'user/settings', name: 'Settings', type: 'link', icon: 'av_timer'}
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

  getMenu(userType) {
    if (userType === AppConstants.UNIVERSITY) {
      return UNIVERSITY_MENU;
    } else if (userType === AppConstants.COMPANY) {
      return COMPANY_MENU;
    } else if (userType === AppConstants.USER) {
      return USER_MENU;
    }
  }
}
