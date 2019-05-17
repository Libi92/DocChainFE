import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {CommonService} from '../../common.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile_data = null;

  constructor(private userService: UserService,
              private commonService: CommonService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    const req = {'userId': this.commonService.loggedInUser['_id']};
    this.userService.getProfile(req).subscribe(res => {
      if (res['status'] === 200) {
        this.profile_data = res['data'];
      } else {
        this.snackBar.open('User Profile not found',
          '', {duration: 3000});
      }
    });
  }
}
