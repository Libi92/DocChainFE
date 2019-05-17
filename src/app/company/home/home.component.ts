import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../common.service';
import {CompanyService} from '../company.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId: string;

  constructor(private commonService: CommonService,
              private companyService: CompanyService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  findUser(uId) {
    this.userId = uId;
  }

  hire() {
    const req = {
      'userId': this.userId,
      'companyId': this.commonService.loggedInUser['_id']
    };
    this.companyService.hire(req).subscribe(res => {
      this.snackBar.open('Hired new employee',
        '', {duration: 3000});
    });
  }
}
