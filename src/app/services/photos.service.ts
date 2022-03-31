import { Injectable } from '@angular/core';
import axios from 'axios';

export type Tphoto = {
  url: string,
  thumbnailUrl: string,
  title: string,
  id: number,
  albumId: number,
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

  getPhotos(): Promise<Tphoto[]>{
    return axios.get(this.url).then( (response) => response.data );
  }
  constructor() { }
}
