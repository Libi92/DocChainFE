import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../common.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  profileForm: FormGroup;
  name = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private commonService: CommonService,
              private snackBar: MatSnackBar,
              private router: Router) {
    if (!commonService.loggedInUser) {
      router.navigateByUrl('/login');
    }

    this.profileForm = formBuilder.group({
      name: this.name,
      password: this.password,
    });
  }

  ngOnInit() {
  }

  updateProfile() {
    const req = {
      'userId': this.commonService.loggedInUser['_id'],
      'name': this.name.value,
      'password': this.password.value
    };

    this.commonService.updateProfile(req).subscribe(res => {
      this.snackBar.open('Profile updated',
        '', {duration: 3000}
      );
    });
  }
}
