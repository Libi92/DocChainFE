import {Component, OnInit} from '@angular/core';
import {UniversityService} from '../university.service';
import {BlockchainService} from '../../blockchain.service';
import {CommonService} from '../../common.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  pending_students = null;

  constructor(private universityService: UniversityService,
              private blockChainService: BlockchainService,
              private commonService: CommonService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    const req = {
      'university': this.commonService.loggedInUser['_id']
    };
    this.universityService.getStudent(req).subscribe(res => {
      this.pending_students = res['data'];
    });
  }

  enroll(userId, degree) {
    const req = {
      'user': userId,
      'degree': degree,
      'university': this.commonService.loggedInUser['_id']
    };

    this.universityService.enrollStudent(req).subscribe(res => {
      this.addExperience(res['experience'], res['certificate']);
    });
  }

  addExperience(expReq, certReq) {
    this.blockChainService.addExperience(expReq).subscribe(res => {
      this.addCertificate(certReq);
    });
  }

  addCertificate(req) {
    this.blockChainService.addCertificate(req).subscribe(res => {
      this.snackBar.open('Student Enrolled',
        '', {duration: 3000});
    });
  }

}
