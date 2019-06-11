import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public commonService: CommonService,
              private router: Router) {
    if (!commonService.loggedInUser) {
      router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }
}
