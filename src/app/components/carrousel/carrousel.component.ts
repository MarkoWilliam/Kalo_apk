import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination } from "swiper/core";
import { SwiperComponent } from "swiper/angular";
// install Swiper modules
SwiperCore.use([Pagination]);;
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarrouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
