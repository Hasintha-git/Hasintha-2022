import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { WorkComponent } from './work/work.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomePageComponent } from './portfolio/home-page/home-page.component';
import { NgxCursorModule } from 'ngx-cursor';
import { SidemenuComponent } from './template/sidemenu/sidemenu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutComponent } from './portfolio/about/about.component';
import { WorkedComponent } from './portfolio/worked/worked.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    BlogComponent,
    WorkComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SidemenuComponent,
    AboutComponent,
    WorkedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxCursorModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
