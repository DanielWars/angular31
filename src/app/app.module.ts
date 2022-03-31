import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleryphotosComponent } from './component/galeryphotos/galeryphotos.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleryphotosComponent,
    TodolistComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
