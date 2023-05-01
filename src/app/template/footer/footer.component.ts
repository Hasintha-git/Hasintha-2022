import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public rates: number;

  constructor() {
    this.rates = 2022
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.addEventListener('scroll', this.myScrollHandler, { passive: true });

    }, 1000); // reduce the delay time

  }

  emailSend() {

  }

  myScrollHandler(event: Event) {
    console.log("hi")
    // code to handle scroll event
  }

}
