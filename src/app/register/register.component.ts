import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  name = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  userType = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar) {
    this.registerForm = formBuilder.group({
      name: this.name,
      username: this.username,
      password: this.password,
      userType: this.userType
    });
  }

  ngOnInit() {
  }

  doRegister() {
    const req = {
      'name': this.name.value,
      'username': this.username.value,
      'password': this.password.value,
      'userType': this.userType.value
    };

    this.authService.doRegister(req).subscribe(res => {
      if (res['valid']) {
        this.snackBar.open('New user added',
          '', {duration: 3000}
        );
      }
    });
  }

}
