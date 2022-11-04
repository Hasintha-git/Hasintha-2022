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

  openResume() {
    window.open('https://drive.google.com/file/d/1b-e_FcZCDT7XQtiHDYbDPEQJ_64QGyI8/view?usp=sharing')
  }
}
