import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId: string;
  userData: any;
  showHireComponent = false;

  constructor() {
  }

  ngOnInit() {
  }

  findUser(uId) {
    this.userId = uId;
  }

  hire() {
    this.showHireComponent = true;
  }

  onProfileLoad(userData) {
    this.userData = userData;
  }
}
