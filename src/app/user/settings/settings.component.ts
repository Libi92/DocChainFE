import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../common.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  profileForm: FormGroup;
  name = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder,
              private userService: UserService,
              private commonService: CommonService,
              private snackBar: MatSnackBar) {
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

    this.userService.updateProfile(req).subscribe(res => {
      this.snackBar.open('Profile updated',
        '', {duration: 3000}
      );
    });
  }
}
