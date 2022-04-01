import { Component, OnInit } from '@angular/core';
import { UsersService, Tuser, Taddress, Tgeo, Tcompany } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Tuser[] = [];

  constructor(private service: UsersService) {
    this.service.getUsers().then( (response) => {
      this.users = response;
    });
   }

  ngOnInit(): void {
  }

}
