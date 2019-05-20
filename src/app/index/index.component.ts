import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  subTitleUsers = 'Users Joined';
  subTitleCertificates = 'Certificates Generated';
  subTitleEmployees = 'Employees Hired';
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  noOfCertificates = 0;
  noOfUsers = 0;
  noOfEmployees = 0;

  slides = [
    {
      'class': 'slide1',
      'title': 'BlockChain based Certificate',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
        '          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      'class': 'slide2',
      'title': 'BlockChain based Certificate',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
        '          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      'class': 'slide3',
      'title': 'BlockChain based Certificate',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
        '          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.homeService.getStatus({}).subscribe(res => {
      this.noOfCertificates = res['certificate'];
      this.noOfUsers = res['users'];
      this.noOfEmployees = res['employee'];
    });
  }
}
