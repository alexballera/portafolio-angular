import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {AboutComponent} from "./pages/about/about.component";
import {ItemComponent} from "./pages/item/item.component";
import {BlogComponent} from "./pages/blog/blog.component";


const routes: Routes = [
  {path: 'home', component: PortfolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
