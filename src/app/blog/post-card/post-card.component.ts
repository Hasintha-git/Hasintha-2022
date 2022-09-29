import {Component, OnInit} from '@angular/core';

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

  constructor() {
    this.img_url = "../../../assets/images/img/youtube.png";
    this.txt_title = "Some quick example text to build on the card title and make up";
    this.txt_des = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    this.date = "9 sep 2022";
    this.pageSlice = [[this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], , [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date]];
    this.post_count = 20;
    this.pageSize = 10;
  }

  ngOnInit(): void {
  }

  loadPostsBypagination() {
    console.log(this.pageSize)
  }
}
