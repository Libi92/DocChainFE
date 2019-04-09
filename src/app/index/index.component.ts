import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

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

  constructor() {
  }

  ngOnInit() {
  }

}
