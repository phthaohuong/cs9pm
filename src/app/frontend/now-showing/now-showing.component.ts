import { Component, OnInit } from "@angular/core";
import $ from "jquery";
declare var $: any;

@Component({
  selector: "app-now-showing",
  templateUrl: "./now-showing.component.html",
  styleUrls: ["./now-showing.component.scss"],
})
export class NowShowingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
        },
      },
    });
  }
}
