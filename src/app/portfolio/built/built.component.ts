import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {slideAnimation} from '../built/side.animation';
import {interval} from 'rxjs';
import {trigger} from "@angular/animations";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-built',
  templateUrl: './built.component.html',
  styleUrls: ['./built.component.scss'],
  animations: [
    trigger('slideAnimation', [
      // define animation here
    ])
  ]
})

export class BuiltComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    // this.preloadImages();
    const obs=interval(6000);
    obs.subscribe((d:any)=> {
      this.nextSlide()

    })
  }

  openUrl(url:any) {
    window.open(url)
  }

  currentIndex = 0;
  slides = [
    {description: '“Always helps you to do the best like a friend rather than a boss.. If you want to do the best, you should definitely choose,  they will definitely help you to grow bigger and consider as you are one of our own and give you our full support.. Thank you Hasintha Diyaneth For the support you are giving 💓”', name: 'Sadun Madushanka', profession: '24shop Owner', img: '../../../assets/images/feedback/sadun.jpg'},
    {description: '“They provide a great software solutions for any kind of your requirement (campus ,job ect).professional service .highly reccomended.”', name: 'Tishan Chathura', profession: 'Software Engineer', img: '../../../assets/images/feedback/tishan.jpg'},
    // {description: '“kkk ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”', name: '02'},
  ];



  // preloadImages() {
  //   this.slides.forEach(slide => {
  //     (new Image()).src = slide.description;
  //   });
  // }

  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }


  nextSlide() {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 3, color: 'lightblue'},
  ];

}
