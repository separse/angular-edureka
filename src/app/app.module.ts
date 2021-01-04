import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './header/home/home.component';
import { ListComponent } from './header/list/list.component';
import { CreateComponent } from './header/create/create.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ListDetailComponent } from './header/list/list-detail/list-detail.component';
import { FoadShariat6Component } from './header/foad-shariat-6/foad-shariat-6.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './header/home/star/star.component';
import { UsersComponent } from './header/users/users.component';
import { UsersFormComponent } from './header/users/users-form/users-form.component';
import { UsersTableComponent } from './header/users/users-table/users-table.component';
import { ViewChildComponent } from './header/view-child/view-child.component';
import { InnerViewChildComponent } from './header/view-child/inner-view-child/inner-view-child.component';
import { UserComponent } from './header/users/user/user.component';
import { CarouselDirective } from './header/carousel/carousel.directive';
import { CarouselComponent } from './header/carousel/carousel.component';
import { ColorChangeDirective } from './header/carousel/color-change.directive';
import { BackgroundChangeDirective } from './header/carousel/background-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    HeaderComponent,
    ListDetailComponent,
    FoadShariat6Component,
    StarComponent,
    UsersComponent,
    UsersFormComponent,
    UsersTableComponent,
    ViewChildComponent,
    InnerViewChildComponent,
    UserComponent,
    CarouselComponent,
    CarouselDirective,
    ColorChangeDirective,
    BackgroundChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
