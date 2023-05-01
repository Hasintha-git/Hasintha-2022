import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {WorkComponent} from './work/work.component';
import {HeaderComponent} from './template/header/header.component';
import {FooterComponent} from './template/footer/footer.component';
import {HomePageComponent} from './portfolio/home-page/home-page.component';
import {NgxCursorModule} from 'ngx-cursor';
import {SidemenuComponent} from './template/sidemenu/sidemenu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AboutComponent} from './portfolio/about/about.component';
import {WorkedComponent} from './portfolio/worked/worked.component';
import {EpicComponent} from './portfolio/worked/epic/epic.component';
import {BuiltComponent} from './portfolio/built/built.component';
import {ProjectsComponent} from './portfolio/projects/projects.component';
import {TouchComponent} from './portfolio/touch/touch.component';
import {BlogHeaderComponent} from './template/blog-header/blog-header.component';
import {LandingPageComponent} from './blog/landing-page/landing-page.component';
import {PostListComponent} from './blog/post-list/post-list.component';
import {PostCardComponent} from './blog/post-card/post-card.component';
import {BlogFooterComponent} from './template/blog-footer/blog-footer.component';
import {SocialMediaComponent} from './template/social-media/social-media.component';
import {ArticleComponent} from './blog/article/article.component';
import {ArticleBodyComponent} from './blog/article/article-body/article-body.component';
import {ArticleFooterComponent} from './blog/article/article-footer/article-footer.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {RelatedArticleComponent} from './blog/article/related-article/related-article.component';
import {RelatedCardComponent} from './blog/article/related-card/related-card.component';
import {MatMenuModule} from "@angular/material/menu";
import {AngularFireModule} from '@angular/fire/compat'

import {MatDialogModule} from '@angular/material/dialog';
import { FeedbackComponent } from './portfolio/touch/feedback/feedback.component';
import { LoaderComponent } from './template/loader/loader.component';
import {environment} from "../environments/environment";
import { MatIconModule } from '@angular/material/icon';
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
    EpicComponent,
    BuiltComponent,
    ProjectsComponent,
    TouchComponent,
    BlogHeaderComponent,
    LandingPageComponent,
    PostListComponent,
    PostCardComponent,
    BlogFooterComponent,
    SocialMediaComponent,
    ArticleComponent,
    ArticleBodyComponent,
    ArticleFooterComponent,
    RelatedArticleComponent,
    RelatedCardComponent,
    FeedbackComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxCursorModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
