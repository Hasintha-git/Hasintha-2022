import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  name: string;
  profession: string;
  description: string;
  constructor() {
    this.name ="Hasintha Diyaneth.";
    this.profession = "I build things for the web.";
    this.description = "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at";
  }

  ngOnInit(): void {
  }

}
