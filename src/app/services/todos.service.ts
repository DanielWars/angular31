import { Injectable } from '@angular/core';
import axios from 'axios';

export type Ttodo = {
  userd: number,
  id: number,
  title: string,
  completed: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  url: string = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(): Promise<Ttodo[]>{
    return axios.get(this.url).then( (response) => response.data );
  }

  constructor() { }
}
