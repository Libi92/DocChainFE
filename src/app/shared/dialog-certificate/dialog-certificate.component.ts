import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-dialog-certificate',
  templateUrl: './dialog-certificate.component.html',
  styleUrls: ['./dialog-certificate.component.css']
})
export class DialogCertificateComponent implements OnInit {

  university: any;

  constructor(public dialogRef: MatDialogRef<DialogCertificateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private commonService: CommonService) {
  }

  ngOnInit() {
    this.university = this.commonService.loggedInUser;
  }

  onClose() {
    this.dialogRef.close();
  }
}
