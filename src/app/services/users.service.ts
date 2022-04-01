import { TagOpenEndToken } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import axios from 'axios';

export type Tcompany = {
  name: string,
  catchPhrase: string,
  bs: string,
}

export type Tgeo = {
  lat: string,
  lng: string,
}

export type Taddress = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Tgeo,
}

export type Tuser = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  company: Tcompany,
  address: Taddress,
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Promise<Tuser>{
    return axios.get(this.url).then( (response) => response.data );
  }

  constructor() { }
}
