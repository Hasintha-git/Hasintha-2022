import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openLink(url:any) {
    window.open(url)
  }

  openGithubRepo() {
    window.open('https://github.com/Hasintha-git?tab=repositories')
  }

  openYoutubeChannel() {
    window.open('https://www.youtube.com/@hasiyatech')
  }
}
