import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  img_src: string;
  txt_title: string;

  constructor() {
    this.img_src = "../../../assets/images/covers/monastery-7443192_1920.jpg";
    this.txt_title = "Some quick example text to build on the card title and make up";

  }

  ngOnInit(): void {
  }

}
