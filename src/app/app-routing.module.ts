import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidemenuComponent} from "./template/sidemenu/sidemenu.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'menu', component: SidemenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
