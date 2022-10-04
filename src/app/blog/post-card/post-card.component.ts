import {Component, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: number;
}

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  img_url: string;
  txt_title: string;
  txt_des: string;
  date: string;
  pageSlice:Array<any>=[];
  post_count: number;
  pageSize: number;
  img_profile: string;

  breakpoint: number;
  cols_1=1;
  cols_2=2;


  tiles: Tile[] = [
    {text: 1, cols: this.cols_2, rows: 2, color: 'lightblue'},
    {text: 2, cols: this.cols_1, rows: 1, color: 'lightgreen'},
    {text: 3, cols: this.cols_1, rows: 1, color: 'lightpink'},
    {text: 4, cols: this.cols_1, rows: 1, color: 'lightpink'},
    {text: 5, cols: this.cols_1, rows: 1, color: 'lightpink'},
    {text: 6, cols: this.cols_1, rows: 1, color: 'lightpink'},
    {text: 7, cols: this.cols_1, rows: 1, color: 'lightpink'},
    {text: 8, cols: this.cols_2, rows: 2, color: '#DDBDF1'},
    {text: 9, cols: this.cols_1, rows: 1, color: 'lightpink'},
    {text: 10, cols: this.cols_1, rows: 1, color: 'lightpink'},
    {text: 11, cols: this.cols_1, rows: 1, color: 'lightpink'},
    {text: 12, cols: this.cols_1, rows: 1, color: 'lightpink'},

  ];


  constructor() {
    this.img_url = "../../../assets/images/img/youtube.png";
    this.txt_title = "Some quick example text to build on the card title and make up";
    this.txt_des = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    this.date = "9 sep 2022";
    this.pageSlice = [[this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date]];
    this.post_count = 20;
    this.pageSize = 10;
    this.img_profile = "https://secure.gravatar.com/avatar/e925c5a538683b80e750ebd0531f0f08?s=90&d=mm&r=g"
    this.breakpoint = 3;

  }

  ngOnInit(): void {
  }


  onResize(event:any) {
    if (event.target.innerWidth <= 1314) {
      this.breakpoint = 2;
      this.cols_1 = 1;
      this.cols_2 = 1;
    }else {
      this.breakpoint = 3;
    }

  }

  loadPostsBypagination() {
    console.log(this.pageSize)
  }
}
