import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FeedbackComponent} from "./feedback/feedback.component";

@Component({
  selector: 'app-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.scss']
})
export class TouchComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openFeedback() {
    const dialogRef = this.dialog.open(FeedbackComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openResume() {
    window.open('https://drive.google.com/file/d/1b-e_FcZCDT7XQtiHDYbDPEQJ_64QGyI8/view?usp=sharing')
  }

}
