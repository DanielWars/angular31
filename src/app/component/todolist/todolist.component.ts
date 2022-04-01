import { Component, OnInit } from '@angular/core';
import { TodosService, Ttodo } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: Ttodo[] = [];

  constructor(private service: TodosService) {
    this.service.getTodos().then( (response) => {
      this.todos = response;
    });
   }

  ngOnInit(): void {
  }

}
