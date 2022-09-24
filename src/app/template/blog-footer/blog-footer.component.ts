import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.scss']
})
export class BlogFooterComponent implements OnInit {
  public rates: number;

  constructor() {
    this.rates = 4200
  }
  ngOnInit(): void {
  }

}
