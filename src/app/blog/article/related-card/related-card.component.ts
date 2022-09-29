import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-related-card',
  templateUrl: './related-card.component.html',
  styleUrls: ['./related-card.component.scss']
})
export class RelatedCardComponent implements OnInit {
  img_url: string;
  txt_title: string;
  txt_des: string;
  date: string;
  pageSlice: Array<any> = [];

  constructor() {
    this.img_url = "../../../assets/images/img/youtube.png";
    this.txt_title = "Some quick example text to build on the card title and make up";
    this.txt_des = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    this.date = "9 sep 2022";
    this.pageSlice = [[this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date], [this.img_url, this.txt_title, this.txt_des, this.date]];
  }

  ngOnInit(): void {
  }

}
