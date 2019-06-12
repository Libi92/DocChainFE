import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UniversityService} from '../university.service';
import {CommonService} from '../../common.service';
import {BlockchainService} from '../../blockchain.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;

  student_list = null;

  name = new FormControl('', Validators.required);
  registerNo = new FormControl('', Validators.required);
  department = new FormControl('', Validators.required);
  degree = new FormControl('', Validators.required);
  college = new FormControl('', Validators.required);
  adhaar = new FormControl('', Validators.required);
  year = new FormControl('', Validators.required);

  nameError: string;
  registerNoError: string;
  departmentError: string;
  degreeError: string;
  collegeError: string;
  yearError: string;
  adhaarError: string;

  constructor(formBuilder: FormBuilder,
              private universityService: UniversityService,
              private blockChainService: BlockchainService,
              private commonService: CommonService,
              private snackBar: MatSnackBar,
              private router: Router) {
    if (!commonService.loggedInUser) {
      router.navigateByUrl('/login');
    }

    this.studentForm = formBuilder.group({
      'name': this.name,
      'registerNo': this.registerNo,
      'department': this.department,
      'degree': this.degree,
      'college': this.college,
      'adhaar': this.adhaar,
      'year': this.year
    });
  }

  ngOnInit() {
    this.getStudent();
  }

  addStudent() {
    const name = this.name.value;
    const registerNo = this.registerNo.value;
    const department = this.department.value;
    const degree = this.degree.value;
    const college = this.college.value;
    const year = this.year.value;
    const adhaar = this.adhaar.value;

    let valid = true;
    if (!name) {
      this.nameError = '*name cannot be empty';
      valid = false;
    } else {
      this.nameError = null;
    }

    if (!registerNo) {
      this.registerNoError = '*registerNo cannot be empty';
      valid = false;
    } else {
      this.registerNoError = null;
    }

    if (!department) {
      this.departmentError = '*department cannot be empty';
      valid = false;
    } else {
      this.departmentError = null;
    }

    if (!degree) {
      this.degreeError = '*degree cannot be empty';
      valid = false;
    } else {
      this.degreeError = null;
    }

    if (!college) {
      this.collegeError = '*college cannot be empty';
      valid = false;
    } else {
      this.collegeError = null;
    }

    if (!year) {
      this.yearError = '*year cannot be empty';
      valid = false;
    } else if (isNaN(year)) {
      this.yearError = '*year should be a number';
      valid = false;
    } else {
      this.yearError = null;
    }

    if (!adhaar) {
      this.adhaarError = '*adhaar cannot be empty';
      valid = false;
    } else if (adhaar.length !== 12) {
      this.adhaarError = '*adhaar should be 12 digit';
      valid = false;
    } else {
      this.adhaarError = null;
    }

    if (!valid) {
      return;
    }

    const req = {
      'name': name,
      'registerNo': registerNo,
      'department': department,
      'degree': degree,
      'college': college,
      'year': year,
      'adhaar': adhaar,
      'university': this.commonService.loggedInUser._id
    };

    this.universityService.addStudent(req).subscribe(res => {
      if (res['status']) {
        this.addStudentToBlockchain(res['student'], this.name.value);
      }
    });
  }

  addStudentToBlockchain(userId, name) {
    this.blockChainService.addStudent(userId, name).subscribe(res => {
      this.snackBar.open('New user added',
        '', {duration: 3000});
      this.getStudent();
    });
  }

  getStudent() {
    const req = {
      'university': this.commonService.loggedInUser['_id']
    };
    this.universityService.getStudent(req).subscribe(res => {
      this.student_list = res['data'];
    });
  }

}
