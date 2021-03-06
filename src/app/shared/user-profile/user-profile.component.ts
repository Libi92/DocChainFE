import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {UserService} from '../../user/user.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogCertificateComponent} from '../dialog-certificate/dialog-certificate.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {

  @Input('userId') userId: string;
  @Output() loadCompleted: EventEmitter<any> = new EventEmitter<any>();

  profile_data = null;

  constructor(private userService: UserService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    const req = {'userId': this.userId};
    this.userService.getProfile(req).subscribe(res => {
      if (res['status'] === 200) {
        this.profile_data = res['data'];
        this.loadCompleted.emit(this.profile_data);

      } else {
        this.snackBar.open('User Profile not found',
          '', {duration: 3000});
      }
    });
  }

  onCertificateSelect(certificate) {
    const dialogRef = this.dialog.open(DialogCertificateComponent, {
      width: '860px',
      data: certificate
    });
  }

}
