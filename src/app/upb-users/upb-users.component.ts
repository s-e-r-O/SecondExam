import { Component, OnInit } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-upb-users',
  templateUrl: './upb-users.component.html',
  styleUrls: ['./upb-users.component.css']
})
export class UpbUsersComponent implements OnInit 
{
  users = [];

  constructor() { }

  ngOnInit() {
    this.users = data.users;
  }

}
