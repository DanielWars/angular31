import { Component, OnInit } from '@angular/core';
import { PhotosService, Tphoto } from 'src/app/services/photos.service';

@Component({
  selector: 'app-galeryphotos',
  templateUrl: './galeryphotos.component.html',
  styleUrls: ['./galeryphotos.component.css']
})
export class GaleryphotosComponent implements OnInit {
  photos: Tphoto[] = [];

  constructor(private service: PhotosService) { 
    this.service.getPhotos().then( (response) => {
      this.photos = response;
    });
  }

  ngOnInit(): void {
  }

}
