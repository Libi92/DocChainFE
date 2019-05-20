import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: any;

  constructor(private companyService: CompanyService,
              private commonService: CommonService) {

  }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    const req = {
      'company': this.commonService.loggedInUser['_id']
    };
    this.companyService.getAllEmployee(req).subscribe(res => {
      this.employeeList = res;
    });
  }

  relieveEmployee(userId) {
    const req = {
      '$class': 'com.app.edunet.Experience',
      'experienceId': 'string',
      'fromYear': 0,
      'toYear': 0,
      'company': {}
    };
  }
}
