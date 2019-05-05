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
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  userType = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder,
              private authService: AuthService,
              private blockChainService: BlockchainService,
              private snackBar: MatSnackBar) {
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
