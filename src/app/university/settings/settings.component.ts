import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../common.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private commonService: CommonService,
              private snackBar: MatSnackBar) {
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
