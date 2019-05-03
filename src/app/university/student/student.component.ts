import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UniversityService} from '../university.service';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;

  name = new FormControl('', Validators.required);
  registerNo = new FormControl('', Validators.required);
  department = new FormControl('', Validators.required);
  degree = new FormControl('', Validators.required);
  college = new FormControl('', Validators.required);
  year = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder, private universityService: UniversityService,
              private commonService: CommonService) {
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

      }
    });
  }

}
