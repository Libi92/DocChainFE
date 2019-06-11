import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId: string;
  userData: any;
  showHireComponent = false;

  constructor(private commonService: CommonService, private router: Router) {
    if (!this.commonService.loggedInUser) {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }

  findUser(uId) {
    this.userId = uId;
  }

  hire() {
    this.showHireComponent = true;
  }

  onProfileLoad(userData) {
    this.userData = userData;
  }
}
