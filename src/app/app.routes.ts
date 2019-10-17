import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ArticleDetailComponent} from './articleDetails/artdetails.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'artdetails/:id', component: ArticleDetailComponent},
  {path: 'not-found', component: NotFoundComponent },
  {path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
