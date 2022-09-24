import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  pageSlice:Array<any>=[];

  constructor() {
    this.pageSlice = [0,1,2,3,4,5,6,7,8,9,10]
  }

  ngOnInit(): void {
  }

}
