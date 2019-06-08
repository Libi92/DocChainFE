import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {CommonService} from '../../common.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: any;

  constructor(private companyService: CompanyService,
              private commonService: CommonService,
              public dialog: MatDialog) {

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

  relieveEmployee(userId, id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: 'Do you confirm relieving of employee?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const req = {
          'userId': userId,
          'id': id
        };

        this.companyService.relieveEmployee(req).subscribe(res => {
          this.getAllEmployees();
        });
      }
    });
  }
}
