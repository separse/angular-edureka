import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FoadShariat6Component } from './foad-shariat-6/foad-shariat-6.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { StarComponent } from './star/star.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'foadShariat6', component: FoadShariat6Component },
  { path: 'star', component: StarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
