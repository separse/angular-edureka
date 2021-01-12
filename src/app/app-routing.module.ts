import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './header/create/create.component';
import { FoadShariat6Component } from './header/foad-shariat-6/foad-shariat-6.component';
import { HomeComponent } from './header/home/home.component';
import { ListComponent } from './header/list/list.component';
import { StarComponent } from './header/home/star/star.component';
import { UsersComponent } from './header/users/users.component';
import { ViewChildComponent } from './header/view-child/view-child.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonsComponent } from './header/persons/persons.component';
import { PersonComponent } from './header/persons/person/person.component';
import { EditPersonComponent } from './header/persons/edit-person/edit-person.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'foadShariat6', component: FoadShariat6Component },
  { path: 'star', component: StarComponent },
  { path: 'users', component: UsersComponent },
  { path: 'persons', component: PersonsComponent },
  {
    path: 'persons/:id',
    component: PersonComponent,
    children: [{ path: 'edit', component: EditPersonComponent }],
  },
  { path: 'viewChild', component: ViewChildComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
