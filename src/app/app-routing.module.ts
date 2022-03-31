import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryphotosComponent } from './component/galeryphotos/galeryphotos.component';
import { HomeComponent } from './component/home/home.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'galeryphotos', component: GaleryphotosComponent },
  { path: 'todolist', component: TodolistComponent},
  { path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
