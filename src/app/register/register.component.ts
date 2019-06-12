import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {MatSnackBar} from '@angular/material';
import {BlockchainService} from '../blockchain.service';
import {AppConstants} from '../app.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  name = new FormControl('', Validators.required);
  afflNo = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  userType = new FormControl('', Validators.required);

  nameError: string;
  afflNoError: string;
  userTypeError: string;
  usernameError: string;
  passwordError: string;

  constructor(formBuilder: FormBuilder,
              private authService: AuthService,
              private blockChainService: BlockchainService,
              private snackBar: MatSnackBar) {
    this.registerForm = formBuilder.group({
      name: this.name,
      afflNo: this.afflNo,
      username: this.username,
      password: this.password,
      userType: this.userType
    });
  }

  ngOnInit() {
  }

  doRegister() {

    const name = this.name.value;
    const afflNo = this.afflNo.value;
    const username = this.username.value;
    const password = this.password.value;
    const userType = this.userType.value;

    let valid = true;
    if (!name) {
      this.nameError = '*name cannot be empty';
      valid = false;
    } else {
      this.nameError = null;
    }
    if (!afflNo) {
      this.afflNoError = '*cannot be empty';
      valid = false;
    } else {
      this.afflNoError = null;
    }
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
    if (!userType) {
      this.userTypeError = '*select a userType';
      valid = false;
    } else {
      this.userTypeError = null;
    }

    if (!valid) {
      return;
    }

    const req = {
      'name': name,
      'afflNo': afflNo,
      'username': username,
      'password': password,
      'userType': userType
    };

    this.authService.doRegister(req).subscribe(res => {
      if (res['valid']) {
        this.addEntityInBlockChain(res['user'], this.name.value, this.userType.value);
        this.snackBar.open('New user added',
          '', {duration: 3000}
        );
      }
    });
  }

  addEntityInBlockChain(userId, name, userType) {
    let service = null;
    if (userType === AppConstants.UNIVERSITY) {
      service = this.blockChainService.addUniversity(userId, name);
      service.subscribe(res => {
        console.log(res);
      });
      service = this.blockChainService.addCompany(userId, name);
    } else {
      service = this.blockChainService.addCompany(userId, name);
    }

    service.subscribe(res => {
      console.log(res);
    });
  }

}
