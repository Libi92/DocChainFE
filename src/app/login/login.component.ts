import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AppConstants} from '../app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder, private authService: AuthService,
              private snackBar: MatSnackBar, private router: Router) {
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

    const req = {
      'username': username,
      'password': password
    };

    this.authService.doLogin(req).subscribe(res => {
      if (res['valid']) {
        const userType = res['userType'];
        localStorage.setItem(AppConstants.USER_TYPE, userType);
        if (userType === AppConstants.UNIVERSITY) {
          this.router.navigateByUrl('/home/university');
        } else if (userType === AppConstants.COMPANY) {
          this.router.navigateByUrl('/home/company');
        }
      } else {
        this.snackBar.open('Invalid Login',
          '', {duration: 3000}
        );
      }
    });
  }

}
