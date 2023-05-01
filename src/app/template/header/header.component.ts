import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
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


  downloadPDF() {
    FileSaver.saveAs("../../../assets/doc/Hasintha_Diyaneth_Resume.pdf", 'Hasintha_Diyaneth_Resume.pdf');
  }

}
