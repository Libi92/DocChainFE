import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './certificate-dialog.component.html',
  styleUrls: ['./certificate-dialog.component.css']
})
export class CertificateDialogComponent implements OnInit {

  marks: string;

  constructor(
    public dialogRef: MatDialogRef<CertificateDialogComponent>
  ) {
  }

  ngOnInit() {
  }

  onAdd() {
    this.dialogRef.close(this.marks);
  }

}
