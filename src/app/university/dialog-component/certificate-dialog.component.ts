import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './certificate-dialog.component.html',
  styleUrls: ['./certificate-dialog.component.css']
})
export class CertificateDialogComponent implements OnInit {

  marks: any;
  markError: string;

  constructor(
    public dialogRef: MatDialogRef<CertificateDialogComponent>
  ) {
  }

  ngOnInit() {
  }

  onAdd() {
    let valid = true;
    if (!this.marks) {
      this.markError = '*cannot be empty';
      valid = false;
    } else if (isNaN(this.marks)) {
      this.markError = '*should be a number';
      valid = false;
    } else if (Number(this.marks) < 0 || Number(this.marks) > 10) {
      this.markError = '*should be between 0 and 10';
      valid = false;
    } else {
      this.markError = null;
    }

    if (!valid) {
      return;
    }

    this.dialogRef.close(this.marks);
  }

}
