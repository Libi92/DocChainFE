import {NgModule} from '@angular/core';

import {MenuItems} from './menu-items/menu-items';
import {AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective} from './accordion';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CommonModule} from '@angular/common';
import {DemoMaterialModule} from '../demo-material-module';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    UserProfileComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    UserProfileComponent
  ],
  providers: [MenuItems]
})
export class SharedModule {
}
