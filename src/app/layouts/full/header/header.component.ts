import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  constructor(private router: Router, private commonService: CommonService) {
  }

  onSignOut() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  onSettings() {
    this.router.navigateByUrl(this.commonService.settingsUrl);
  }
}
