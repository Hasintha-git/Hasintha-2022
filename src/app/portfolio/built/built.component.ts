import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-built',
  templateUrl: './built.component.html',
  styleUrls: ['./built.component.scss']
})
export class BuiltComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  openUrl(url:any) {
    window.open(url)
  }
}
