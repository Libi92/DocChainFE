import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../common.service';
import {CompanyService} from '../company.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.css']
})
export class HireEmployeeComponent implements OnInit {

  @Input('userData') userData: any;

  constructor(private commonService: CommonService,
              private companyService: CompanyService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
    console.log(this.userData);
  }

  hire(department, role) {
    const req = {
      'userId': this.userData['certifiedUser'],
      'companyId': this.commonService.loggedInUser['_id'],
      'department': department,
      'role': role
    };
    this.companyService.hire(req).subscribe(res => {
      this.snackBar.open('Hired new employee',
        '', {duration: 3000});
      // this.router.navigateByUrl('employee');
    });
  }

}
