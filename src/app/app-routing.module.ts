import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidemenuComponent} from "./template/sidemenu/sidemenu.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {BlogComponent} from "./blog/blog.component";
import {ArticleComponent} from "./blog/article/article.component";
import {LoaderComponent} from "./template/loader/loader.component";

const routes: Routes = [
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  // { path: 'loading', component: LoaderComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'menu', component: SidemenuComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'article/:path', component: ArticleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
