import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AppConstants} from '../app.constants';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usernameError: string;
  passwordError: string;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder, private authService: AuthService,
              private snackBar: MatSnackBar, private router: Router, private commonService: CommonService) {
    this.loginForm = formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
  }

  doLogin() {
    const username = this.username.value;
    const password = this.password.value;

    let valid = true;
    if (!username) {
      this.usernameError = '*username cannot be empty';
      valid = false;
    } else {
      this.usernameError = null;
    }
    if (!password) {
      this.passwordError = '*password cannot be empty';
      valid = false;
    } else {
      this.passwordError = null;
    }

    if (!valid) {
      return;
    }

    const req = {
      'username': username,
      'password': password
    };

    this.authService.doLogin(req).subscribe(res => {
      if (res['valid']) {
        const userType = res['userType'];

        const user = res['user'];
        this.commonService.loggedInUser = user;

        localStorage.setItem(AppConstants.USER_TYPE, userType);
        localStorage.setItem(AppConstants.USER_NAME, user['name']);
        if (userType === AppConstants.UNIVERSITY) {
          this.router.navigateByUrl('/home/university');
          this.commonService.settingsUrl = '/home/university/settings';
        } else if (userType === AppConstants.COMPANY) {
          this.router.navigateByUrl('/home/company');
          this.commonService.settingsUrl = '/home/company/settings';
        } else if (userType === AppConstants.USER) {
          this.router.navigateByUrl('/home/user');
          this.commonService.settingsUrl = '/home/user/settings';
        }
      } else {
        this.snackBar.open('Invalid Login',
          '', {duration: 3000}
        );
      }
    });
  }

}
