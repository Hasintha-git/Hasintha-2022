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
    this.profession = "Software Developer | YouTuber | Freelancer";
    this.description = "I’m a software developer and Technology Knowledge sharing YouTube . I started wizlab solution for as Startup Software Company ";
  }

  ngOnInit(): void {
  }

}
