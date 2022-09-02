import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loadComponent :any;
  showFiller = false;
  constructor() {
    this.loadComponent=false
  }

  ngOnInit(): void {
  }

  loadSidemenu() {
    this.loadComponent = true;
  }
}
