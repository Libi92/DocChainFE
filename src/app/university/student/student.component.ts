import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UniversityService} from '../university.service';
import {CommonService} from '../../common.service';
import {BlockchainService} from '../../blockchain.service';
import {MatSnackBar} from '@angular/material';

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
  year = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder,
              private universityService: UniversityService,
              private blockChainService: BlockchainService,
              private commonService: CommonService,
              private snackBar: MatSnackBar) {
    this.studentForm = formBuilder.group({
      'name': this.name,
      'registerNo': this.registerNo,
      'department': this.department,
      'degree': this.degree,
      'college': this.college,
      'year': this.year
    });
  }

  ngOnInit() {
    this.getStudent();
  }

  addStudent() {
    const req = {
      'name': this.name.value,
      'registerNo': this.registerNo.value,
      'department': this.department.value,
      'degree': this.degree.value,
      'college': this.college.value,
      'year': this.year.value,
      'university': this.commonService.loggedInUser._id
    };

    this.universityService.addStudent(req).subscribe(res => {
      if (res['status']) {
        this.addStudentToBlockchain(res['user'], this.name.value);
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
